import QuantityPicker from "./quantityPicker";
import "./product.css";
import { useState, useContext } from "react"; 
import storeContext from "../store/storeContext";

const Product = (props) => {
    const [quantity, setQuantity] = useState(0);
    const {addProductToCart, removeProductFromCart} = useContext(storeContext); 

    const onQuantityChange = (value) => {
        console.log("qty change", value); 
        setQuantity(value); 
    }

    const getTotal = () => {
        let total= (quantity*props.data.price); 
        return "$" + total.toFixed(2);
    }

    const pushToCart = () => {
        console.log("Pushing to cart", props.data.title); 
        let prodToCart = {
            ...props.data, 
            quantity: quantity        
        }; //this is saying everything that is in props.data will be here and the quantity
        addProductToCart(prodToCart);
        console.log("Test test 1");
    }

    return (
        <div className="product">
            <div className="product-item">
                <h5>{props.data.title}</h5>
                <div className="image-cont">
                   <img src={"/img/" + props.data.image} alt="balloons"/> 
            </div>
            <div className="product-item-desc">
                <h6>{props.data.category}</h6>
                <h6 className="product-desc">{props.data.description}</h6>
            </div>   
            
            <div className="product-pricing">
                <p className="rate">Hourly Rate:</p>
                <label className="price">${props.data.price.toFixed(2)}</label>
                <p className="rate">Total Price:</p>
                <label className="price">{getTotal()}</label>
            </div>
            <p><span> </span></p>
            <QuantityPicker onChange={onQuantityChange} className="qty-change"/> 
            <button onClick={pushToCart} className="cart-btn">Add to Cart!</button>
            </div>
            
        </div>
    );
};

export default Product; 