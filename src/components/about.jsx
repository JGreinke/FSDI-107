import { useState } from "react";
import "./about.css"; 

const About = () => {
    const [name, setName] = useState (""); 

    const handleShowName = () => {
        setName("Jasmine Greinke"); 
    };
    return (
        <div className="header">
            <h1>Welcome to my online store!</h1>
            <h1>{name}</h1>
            <button className="btn btn-sm btn-outline-dark" onClick={handleShowName}>Click to see my name</button> 
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