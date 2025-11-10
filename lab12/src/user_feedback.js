import React from "react";

const USER_FEEDBACK = function ( props ) {
    return (<>
        <div className="feedback_container">
            <section className="feedback_card">
                <div className="feedback_content">{props.username}</div>
                <div className="feedback_description">{props.children}</div>
                <div className="feedback_footer">
                    <p className="add_icon"><span>&#10011;</span> Add Feedback</p>
                </div>
            </section>
        </div>
    </>);
}

export default USER_FEEDBACK;
