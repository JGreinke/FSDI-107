import QuantityPicker from "./quantityPicker";
import "./product.css";

const Product = (props) => {
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
                <p>Hourly Rate:</p>
                <label className="total">${props.data.price}</label>
                <p>Total Price:</p>
                <label className="price">${props.data.price}</label>
            </div>
            <QuantityPicker></QuantityPicker> 
            <button className="cart-btn">Add to Cart!</button>
            </div>
            
        </div>
// simple change
    );
};

export default Product; 