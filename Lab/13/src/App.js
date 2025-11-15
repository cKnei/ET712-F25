import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Navbars from "./components/navbar";

import './App.css';

function App() {
    return (<>
        <h1 className="title">React Routing by Knei</h1>
        <BrowserRouter>
            <Navbars />
            <Routes>
                <Route path="/"         element={<Home/>}    />
                <Route path="/about"    element={<About/>}   />
                <Route path="/contact"  element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
