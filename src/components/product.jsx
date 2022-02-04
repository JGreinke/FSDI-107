import QuantityPicker from "./quantityPicker";
import "./product.css";

const Product = (props) => {
    return (
        <div className="product">
            <div className="product-item">
                <div className="image-cont">
                   <img src={"/img/" + props.data.image} alt="balloons"/> 
                </div>
               
            <h5>{props.data.title}</h5>
            <div>
                <label className="total">$200.00</label>
                <label className="price">${props.data.price}</label>
            </div>
            <QuantityPicker></QuantityPicker> 
            <button className="cart-btn">Add to Cart!</button>
            </div>
            
        </div>

    );
};

export default Product; 