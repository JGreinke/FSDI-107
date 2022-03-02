import "./cart.css";
import CartItem from "../components/cartItem"; 
import { useContext} from 'react'; 
import storeContext from "../store/storeContext"; 

const Cart = () => {
    const {cart} = useContext(storeContext); 

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Your currently have</h1>
                <h1 className="cart-length">{cart.length}</h1>
                <h1>item(s) in your cart!</h1> 
            </div>
            
            <div className="cart-list">
               
                    {cart.map((prod) => (
                        (<CartItem key={prod.id} data={prod} />)
                    ))}
                
            </div>            
        </div>
    )
}

export default Cart; 