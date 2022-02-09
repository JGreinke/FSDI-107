import "./navBar.css"; 

const NavBar = () => {
    // const NavBar is an example of an arrow funtion rather than saying function NavBar (){};
    // the arrow function will allow more options with React. ex. click events won't work with traditional functions
    return(
        <div className="navbar">
            <ul>
                <li><a className="link" href="/#">Home</a></li>
                <li><a className="link" href="/#">Services</a></li>
                <li><a className="link" href="/#">Contact</a></li>
            </ul>
        </div>
    )
}
export default NavBar; 