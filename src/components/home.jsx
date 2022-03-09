import "./home.css";
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
                <div className="header">
                    <h3 className="welcome">Welcome to</h3>
                    <h2>Travel Escapes</h2>
                    <p>The only store that allows you to create your perfect travel experience while visiting San Diego, CA!</p> 
                </div>
                <div className="link">
                   <Link className="btn btn-sm btn-dark" to="/catalog">
                    Go to the catalog!
                    </Link> 
                </div>
                <div className="category-desc-list">
                    <h1 className="category-desc-list-header">-Category List-</h1>
                    <div className="category-desc-list-item">
                        <h2>Sky's The Limit</h2>
                        <p>This experience will take you on an adventure in the sky! </p>
                    </div> 
                    <div className="category-desc-list-item">
                        <h2>Water Experience</h2>
                        <p>This experience will give you a chance to experience the world on water!</p>
                    </div> 
                    <div className="category-desc-list-item">
                        <h2>Travel Experience</h2>
                        <p>This experience will take you on an adventure on land via train, car, and more! </p>
                    </div> 
                    <div className="category-desc-list-item">
                        <h2>Local Experience</h2>
                        <p>This experience will take you on an adventure right around the corner from your home! </p>
                    </div>    
                </div>
        </div>
    );
}

export default Home; 