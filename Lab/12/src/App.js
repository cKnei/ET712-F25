import Feedback from "./Feedback";
import User from "./Comment";
import './App.css';

function App() {
    return (<>
        <h1 style={{textAlign: "center"}}>Lab 12, React props by Knei</h1>
        <section className="container">
            <Feedback author="Batman">
                <User image="images/batman.png" datePosted="04/23/2025" message="I am Batman" />
            </Feedback>

            <Feedback author="Daisy">
                <User image="images/graduate.png" datePosted="01/20/2025" message="Where is the bus stop?" />
            </Feedback>

            <Feedback author="Peter">
                <User image="images/support.png" datePosted="04/23/2025" message="I need help!" />
            </Feedback>
        </section>

        <section className="post-comment-list">
            <ul className="comment-list">
            </ul>
        </section>
    </>);
}


export default App;
