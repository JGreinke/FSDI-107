import "./admin.css"; 
import { useState } from 'react'; 

const Admin = () => {
    const [product, setProduct] = useState({}); 
    const [coupon, setCoupon] = useState({});  
    const [allCoupons, setAllCoupons] = useState([]);
    const saveCoupon = () => {
        console.log("coupon registered!", coupon); 

        let copy = [...allCoupons]; 
        copy.push(coupon); 
        setAllCoupons(copy); 
    }
    const codeChange = (e) => {
        console.log("code changed!"); 

        let copy = {...coupon}; //create a copy
        copy.code = e.target.value; //modify copy
        setCoupon(copy); //set the copy as the new value
    };
    const discountChange = (e) => {
        console.log("discount changed!"); 

        let copy = {...coupon}; //create a copy
        copy.discount = parseFloat(e.target.value); //modify copy
        setCoupon(copy); //set the copy as the new value
    };
    const prodChange = (e) => {
        let name = e.target.name; 
        let value = e.target.value; 

        let copy = [...product]; 
        copy[name] = value; 
        setProduct(copy); 
    }

    return(
        <div>
            <h1 className="admin-header">Admin Page</h1>
            <div className="admin-container">
                <div className="products">
                    <h4>Register new products here: </h4>
                    <div className="form">
                        <div >
                            <label className="form-label">Price: </label>
                            <input onChange={prodChange} type="number" name="price" className="form-control"></input>
                        </div>
                        <div>
                            <label className="form-label">Title: </label>
                            <input onChange={prodChange} type="text" name="title" className="form-control"></input>
                        </div>
                        <div>
                            <label className="form-label">Image: </label>
                            <input onChange={prodChange} type="text" name="image" className="form-control"></input>
                        </div>
                        <div>
                            <label className="form-label">Category: </label>
                            <input onChange={prodChange} type="text" name="category" className="form-control"></input>
                        </div>
                        <div>
                            <button onClick={saveCoupon} className="btn btn-dark">Create</button>
                        </div>
                    </div>
                </div>
                <div className="coupon">
                    <h4>Enter your coupons here: </h4>
                    <div className="form">
                        <div>
                            <label className="form-label">Code:</label>
                            <input onChange={codeChange} type="text" className="form-control"></input>
                        </div>
                        <div>
                            <label className="form-label">Discount:</label>
                            <input onChange={discountChange} type="number" className="form-control"></input>
                        </div>
                        <div>
                            <button onClick={saveProduct} className="btn btn-dark">Register</button>
                        </div>
                    </div>
                </div>
                <div className="code-list">
                    <h5>New Products</h5>
                    <ul>
                        {allCoupons.map((coupon) => (
                            <li key={coupon.code}>{coupon.code} - {coupon.discount}%</li>
                        ))}
                    </ul>
                </div>
                <div className="code-list">
                    <h5>Valid Coupons</h5>
                    <ul>
                        {allCoupons.map((coupon) => (
                            <li key={coupon.code}>{coupon.code} - {coupon.discount}%</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Admin; 