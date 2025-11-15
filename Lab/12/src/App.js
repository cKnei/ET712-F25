import './App.css';
import User from "./comments";
import User_Feedback from "./user_feedback";


import Batman from "./images/Batman.png";
import man from "./images/man.png";
import woman from "./images/woman.png";


function App() {
    return (<>
        <h1 style={{textAlign: "Center"}}>Lab 12, React Props by Knei</h1>
        <section className="container">
            {/* User 1 */}
            <User_Feedback>
                <User author="Batman"   image={Batman}  date_posted="04/23/2025"    comment="I'm Batman" />
            </User_Feedback>

            {/* User 2 */}
            <User_Feedback>
                <User author="Daisy"    image={woman}   date_posted="01/20/2025"    comment="Where is the bus stop?" />
            </User_Feedback>

            {/* User 3 */}
            <User_Feedback>
                <User author="Peter"    image={man}     date_posted="12/13/2024"    comment="I need help!" />
            </User_Feedback>
        </section>
    </>);
}

export default App;
