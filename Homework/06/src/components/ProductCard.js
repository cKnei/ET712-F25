import "./ProductCard.css";

function ProductCard( props ) {
    let stock_cls = "card-stock ",
            stock_msg;
        if ( props.stock ) {
            stock_cls += "green";
            stock_msg = "In Stock";
        } else {
            stock_cls += "red";
            stock_msg = "Out of Stock";
        }

    return (<>
        <div className="card">
            <img className="card-image" src={props.image} />
            <p className="card-label">{props.label}</p>
            <p className="card-price">{props.price}</p>
            <p className={stock_cls}>{stock_msg}</p>
        </div>
    </>);
}

export default ProductCard;
