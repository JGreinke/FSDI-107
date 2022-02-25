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
        </div>
    );
}

export default Home; 