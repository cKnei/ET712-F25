import { useState } from "react";

import './App.css';

const MESSAGES = [
    "I think, therefore I am",
    "I have a dream",
    "The only thing we have to fear is fear itself",
];

function App() {
    const [ counter, setCounter ] = useState(0);

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className="app">
            <h1 className="title">Slice card by Knei</h1>

            <section className="slide-wrapper">
                <div className="number-wrapper">
                    <p className="message">{MESSAGES[counter]}</p>
                    <div className={counter === 0 ? "active" : ""}><p>1</p></div>
                    <div className={counter === 1 ? "active" : ""}><p>2</p></div>
                    <div className={counter === 2 ? "active" : ""}><p>3</p></div>
                </div>

                <div className="button-group">
                    <button onClick={() => setCounter((counter - 1) % MESSAGES.length)}>Previous</button>
                    <button onClick={() => setCounter((counter + 1) % MESSAGES.length)}>Next</button>
                </div>
            </section>

            <section className="info">
                <p><b>Cat (Felis cactus)</b>, commonly referred to as the domestic cat or house cat <button className="read-more-button" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Hide" : "Read More"}</button></p>
            </section>

            <section> {
                isOpen && 
                (<div className="read-more">
                    <p>The cat (Felis catus), commonly referred to as the domestic cat or house cat, is a small domesticated carnivourous mammal. It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC</p>
                </div>)
            } </section>
        </div>
    );
}

export default App;
