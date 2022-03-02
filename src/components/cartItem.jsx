import "./cartItem.css"; 
import { useContext} from 'react'; 
import storeContext from "../store/storeContext"; 


const CartItem = (props) => {
    const {removeProductFromCart} = useContext(storeContext); 

    const getTotal = () => {
        let total= (props.data.quantity*props.data.price); 
        return "$" + total.toFixed(2);
    }
    const removeFromCart = () => {
        removeProductFromCart(props.data.id); 
    }
    return(
        <div className="product-card">
            <div className="product-image">
                
                <img src={"/img/" + props.data.image} alt="cart-image"/> 
                
            </div>
            <div className="product-info">
                <h5>{props.data.title}</h5>
                <p className="product-category">{props.data.category}</p>
                <p>{props.data.description}</p>
            </div>
            <div className="product-quantity">
                <h6>Quantity: <span>{props.data.quantity}</span></h6>
                <h6>Total Price: <span>{getTotal()}</span></h6>
                <button onClick={removeFromCart} className = "remove-btn btn btn-sm btn-danger">Delete Item</button>
            </div>
        </div>
    )
}
export default CartItem; 