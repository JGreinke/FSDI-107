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
            <h3>Our amazing catalog</h3>
            <h5>There are {products.length} products</h5>
            

            {products.map((p) => 
                (<Product key={p._id} data={p} />)
            )}
        </div>
    )
}

export default Catalog; 