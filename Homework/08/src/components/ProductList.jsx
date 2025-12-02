import { Link } from "react-router-dom";

import "../App.css";

const PRODUCTS = [
    {id: 1, name: "Apple", price: 1, was: 2.5, image: "images/apple.jpg"},
    {id: 2, name: "Grapes", price: 1.5, was: 2.8, image: "images/grapes.jpg"},
    {id: 3, name: "Orange", price: 3, was: 5.0, image: "images/orange.jpg"},
];

export default function ProductList({ addToCart }) {
    return (<>
        <h2 className="product-title">Products</h2>
        <section className="product-cards-container">
            { PRODUCTS.map( product => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} />
                    <p className="product-information">
                        {product.name}
                        <s>${product.was}/lb</s>
                        <span>${product.price}</span>/lb
                    </p>
                    
                    <button className="product-add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            ))}
        </section>
        
        <Link to="/cart">
            <button className="product-add-to-cart">Go to Cart</button>
        </Link>
    </>);
}
