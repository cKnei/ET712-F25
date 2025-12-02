import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

import './App.css';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        if ( cart.find(i => i.id === product.id) ) 
            setCart( cart.map(i => {
                return {...i, quantity: i.quantity + (i.id === product.id)}
            })) 
        else 
            setCart([...cart, {...product, quantity: 1}]);
    }

    const removeFromCart = product => 
        setCart(cart.filter(i => i.id !== product.id));


    return (<div className="app">
        <h1 className="app-title">Welcome to Knei's supermarket</h1>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductList addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;
