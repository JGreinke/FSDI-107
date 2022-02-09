import { useEffect, useState } from "react";
import Product from "./product";
import DataService from "../services/dataService"; 
import "./catalog.css";

const Catalog = () => {
    const [products, setProducts] = useState ([]);
    // instead of using curly braces, use brackets because it is an array
    const loadData = () => { 

        let service = new DataService(); 
        let data = service.getCatalog(); 
        setProducts(data); 
    };

    useEffect(() => {
        loadData(); 
    });


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