import ModalWindow from "./ModalWindow";

const USER_FEEDBACK = function ( props ) {
    const modalOpen = () => 
        document.querySelector(".modal-window").style.display = "block";

    return (<>
        <div className="feedback_container">
            <section className="feedback_card">
                <div className="feedback_content">{props.username}</div>
                <div className="feedback_description">{props.children}</div>
                <div className="feedback_footer">
                    <p className="add_icon" onClick={modalOpen}><span>&#10011;</span> Add Feedback</p>
                </div>
            </section>
        </div>
        
        <ModalWindow />
    </>);
}

export default USER_FEEDBACK;
