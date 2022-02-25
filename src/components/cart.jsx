import "./cart.css";
import { useState, useContext} from 'react'; 
import storeContext from "../store/storeContext"; 

const Cart = () => {
    const {cart} = useContext(storeContext); 
    
    return (
        <div>
            <h1>Your currently have {cart.length} in your cart:</h1>
            <ul>
                {cart.map((prod) => (
                            <li key={prod.id}>{prod.title}</li>
                        ))}
            </ul>
        </div>
    )
}

export default Cart; 