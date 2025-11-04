import "./App.css";
import mountain from "./images/mountain.jpg";

function App() {
    return (<>
        <h1 className="title">Welcome to React JS</h1>
        <h2 className="author">By Knei</h2>
        <h2 style={{color: "green", textAlign: "center"}}>Inline Styling</h2>

        <section>
            <label for="user_email">Enter Email: </label>
            <input id="user_email" type="email" placeholder="Enter Email Address..."></input>
        </section>
        
        <figure className="img_container">
            <img src={mountain} />
        </figure>
    </>);
}

export default App;
