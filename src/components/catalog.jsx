import { useEffect, useState } from "react";
import Product from "./product";
import DataService from "../services/dataService"; 
import "./catalog.css";

const Catalog = () => {
    const [products, setProducts] = useState ([]);
    // instead of using curly braces, use brackets because it is an array
    const loadData = async () => { 
        // b/c getCatalog is an await function now, it has to also be an async/await function
        let service = new DataService(); 
        let data = await service.getCatalog(); 
        setProducts(data); 
    };

    // when the component loads
    useEffect(() => {
        loadData(); 
    },[]);


    return (
        <div className="catalog">
            <div className="catalog-header">
                <h3>View our amazing traveling catalog below!</h3>
                <h5>There are currently {products.length} products</h5>
            </div>
            <div className="line"></div>
            {products.map((p) => 
                (<Product key={p._id} data={p} />)
            )}
        </div>
    )
}

export default Catalog; 