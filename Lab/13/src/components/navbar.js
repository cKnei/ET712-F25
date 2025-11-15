import { Link } from "react-router-dom";

import "../App.css";

function Navbars() {
    return (<>
        <nav className="navbar">
            <div>
               <a href="https://www.qcc.cuny.edu" target="_blank">QCC</a>
            </div>
            
            <div className="button-group">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/about">About Us</Link></button>
                <button><Link to="/contact">Contact us</Link></button>
            </div>
        </nav>
    </>);
}

export default Navbars;
