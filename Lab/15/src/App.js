import { useState } from "react";

import "./App.css";

function App() {
    const [ inputs, setInputs ] = useState({});
    const [ gender, setGender ] = useState("");
    const [ comment, setComment ] = useState("");

    const preventDefault = e => e.preventDefault();

    const inputHandler = e => 
         setInputs(values => ({...values, [e.target.name]: e.target.value}));

    const selectGender = e => 
        setGender(e.target.value);

    const addComment = e => setComment(e.target.value); 

    return (<>
        <div className="app">
            <form className="form" onSubmit={preventDefault}>
                <fieldset>
                    <legend>Forms in React.js</legend>
                    
                    <div className="form-group">
                        <label for="username">Enter name: </label>
                        <input 
                            className="input-style"
                            id="username"
                            name="username"
                            onChange={inputHandler}
                            placeholder="Enter username..."
                            type="text" 
                            value={inputs.username}
                        />
                    </div>

                    <div className="form-group">
                        <label for="password">Enter password: </label>
                        <input
                            className="input-style"
                            id="password"
                            name="password"
                            onChange={inputHandler}
                            placeholder="Enter password..."
                            type="password"
                            value={inputs.password}
                        />
                    </div>


                    
                    <div className="form-group">
                        <label for="age">Enter age: </label>
                        <input
                            className="input-style"
                            id="age"
                            name="age"
                            onChange={inputHandler}
                            placeholder="Enter age..."
                            type="number"
                            value={inputs.age}
                        />
                    </div>

                    <div className="form-group">
                        <label for="gender">Select gender:
                            <select id="gendcer" onChange={selectGender} value={gender}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <label for="comments">Any suggestions? </label>
                        <textarea
                            id="comments"
                            onChange={addComment}
                            placeholder="Enter your comment..."
                            value={comment}
                        />
                    </div>

                    <input className="form-submit" type="submit" />
                </fieldset>
            </form>

            <p className="display-results">Username = {inputs.username}</p>
            <p className="display-results">Password = {inputs.password}</p>
            <p className="display-results">Age = {inputs.age}</p>
            <p className="display-results">Gender = {gender}</p>
            <p className="display-results">Comment = {comment}</p>
        </div>
    </>);
}

export default App;
