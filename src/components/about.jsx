import { useState } from "react"; 

const About = () => {
    const [name, setName] = useState (""); 

    const handleShowName = () => {
        setName("Jasmine Greinke"); 
    };
    return (
        <div className="about-page">
        <h1>{name}</h1>
        <button className="btn btn-sm btn-outline-dark" onClick={handleShowName}>Click to see my name</button>
        </div>
    );
}; 

export default About; 