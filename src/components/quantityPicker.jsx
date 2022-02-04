import { useState } from "react"; 
import "./quantityPicker.css"; 

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(0); 
    // the variables in the bracket are [get, set]. state variables are immutable meaning they don't change (ex. quantity which is only changed with the setter)
    const handleIncrease = () => {
        let value = quantity + 1;
        if (value >= 0){
           setQuantity(value); 
        }
    }
    const handleDecrease = () => {
        let value = quantity - 1; 
        if (value >= 0){
            setQuantity(value); 
        }
    }
    return(
        <div className="quantityPicker">
            <button className="btn btn-sm btn-outline-dark" disabled={quantity === 0} onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            {/* using {quantity} is rendering the variable */}
            <button className="btn btn-sm btn-outline-dark" onClick={handleIncrease}>+</button>
        </div>
    );
};
export default QuantityPicker;

// {curly braces} mean it is javascript