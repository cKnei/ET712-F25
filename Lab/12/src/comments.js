import React from "react";
import avatar1 from "./images/batman.png";


const User = function ( props ) {
    return (<>
        <section className="card">
            <a><img src={props.image} /></a>
            <div className="content">
                <a className="author">{props.author}</a>
            </div>
            <div className="metadata">
                <p>Posted on <span className="date">{props.date_posted}</span></p>
            </div>
            <div className="comment">
                <p><i>{props.comment}</i></p>
            </div>
        </section>
    </>);
}


export default User;
