import { useState } from "react";
import "./about.css"; 

const About = () => {
    const [name, setName] = useState (""); 
    const [visible, setVisible] = useState(false);

    const handleShowName = () => {
        setName("Jasmine Greinke"); 
    };

    const getMyInfo = () => {
        if(visible){
            return (
            <div>
              <h1>Jamsine Greinke</h1>  
              <h6>greinkejs1069@marybaldwin.edu</h6>
              <ul>
                  <li>I love taking pictures, hiking, and traveling!</li>
                  <li>Open daily from 9am-4pm</li>
                  <li>000-000-0000</li>
                  <li>San Diego, CA</li>
              </ul>
            </div>       
            ); 
        } else return ""; 
    }
    return (
        <div className="header">
            <h1>Welcome to my online store!</h1>
            <h1>{getMyInfo()}</h1>
            <button className="btn btn-sm btn-outline-light" onClick={handleShowName}>Click to see my info</button> 
           {/* <div className="video-container"> */}
                {/* <div className="color-overlay"> */}
                    {/* <video autoplay loop muted> */}
                        {/* <source src="public/img/beach.mp4" type="video/mp4"></source> */}
                    {/* </video> */}
                {/* </div> */}
            {/* </div>  */}
        </div>
        
    );
}; 

export default About; 