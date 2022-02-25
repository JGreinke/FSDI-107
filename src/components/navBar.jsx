import "./navBar.css"; 
import {Link} from 'react-router-dom';
import { useContext} from 'react'; 
import storeContext from "../store/storeContext"; 


const NavBar = () => {
    // const NavBar is an example of an arrow funtion rather than saying function NavBar (){};
    // the arrow function will allow more options with React. ex. click events won't work with traditional functions
    const {cart} = useContext(storeContext); 
    return(
        <div className="navbar">
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/catalog">Catalog</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/todo">To-Do</Link></li>
            </ul>
            <form className="d-flex">
                <Link className="cart-num btn btn-outline-light" to="/cart">
                    <span className="badge">{cart.length}</span>&nbsp;
                    View Cart
                </Link>
            </form>

        </div>
    )
}
export default NavBar; 