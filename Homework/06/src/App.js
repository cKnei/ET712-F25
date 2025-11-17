import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
    return (<>
        <div className="product-grid">
            <ProductCard label="Apple" price="1.00" stock={true} image="images/apple.svg" />
            <ProductCard label="Avacado" price="4.00" stock={false} image="images/avacado.svg" />
            <ProductCard label="Banana" price="2.00" stock={true} image="images/banana.svg" />
            <ProductCard label="Cherries" price="3.50" stock={true} image="images/cherries.svg" />
            <ProductCard label="Dragon Fruit" price="5.00" stock={false} image="images/dragon-fruit.svg" />
            <ProductCard label="Green Grapes" price="2.50" stock={false} image="images/grapes-green.svg" />
            <ProductCard label="Purple Grapes" price="2.50" stock={true} image="images/grapes-purple.svg" />
            <ProductCard label="Lychee" price="6.00" stock={false} image="images/lychee.svg" />
            <ProductCard label="Pineapple" price="8.00" stock={false} image="images/pineapple.svg" />
            <ProductCard label="Watermelon" price="9.00" stock={true} image="images/watermelon.svg" />
        </div>
 
        <div className="attribution">
            Vectors and icons by <a href="http://sbts2018.dribbble.com/?ref=svgrepo.com" target="_blank">Sbts2018</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>
        </div>
    </>);
}

export default App;
