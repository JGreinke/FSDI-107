import React from 'react'; 

// store context describes the data / functions that you want to share between components

const storeContext = React.createContext({
    // this is where you decide what to have in the store (the "promises")
    cart: [], 
    user: {}, 

    addProductToCart: (product) => {},
    removeProductFromCart: (productId) => {}
}); 

export default storeContext;