import { Link } from "react-router-dom";

import "../App.css";

export default function Cart({ cart, removeFromCart }) {
    return (<>
        <h2 className="cart-title">Your Shopping Cart</h2>
        <section className="cart-container">
            { cart.length === 0 && <p className="cart-empty">Cart is Empty</p> }
            { cart.map( item => (
                <div className="cart-item" key={item.id}>
                    <img className="cart-item-image" src={item.image} />
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{item.price}/lb</p>
                    <p className="cart-item-quantity">{item.quantity} lbs</p>
                    <p className="cart-item-total">${item.price * item.quantity}</p>
                    <button className="cart-item-remove" onClick={() => removeFromCart(item)}>x Remove</button>
                </div>
            ))}

            <p className="cart-total">Total ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </section>

        <Link to="/">
            <button className="product-add-to-cart">Go to Store</button>
        </Link>
    </>);
}
