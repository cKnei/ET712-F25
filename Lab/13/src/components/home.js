import { Link } from "react-router-dom";

import "../App.css";
import about from "../images/about.jpg";
import contact from "../images/contact.jpg";

function Home() {
    return (<>
        <header className="header">
            <h1 className="header-title">Home</h1>
        </header>
        
        <main className="main-container">
            <div className="card-image">
                <Link to="/about"><img src={about} /></Link>
            </div>
            <div className="card-image">
                <Link to="/contact"><img src={contact} /></Link>
            </div>
        </main>
    </>);
}

export default Home;
