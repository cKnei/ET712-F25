import ModalWindow from "./ModalWindow";

function Feedback( props ) {
    const openModalWindow = () => {
        document.querySelector(".modal-window").style.display = "block";
        
        document.querySelector(".modal-username").innerHTML = `<em>${props.author}</em>`;
    }

    return (<>
        <div className="feedback-container">
            <section className="feedback-card">
                <div className="feedback-content">{props.author}</div>
                <div className="feedback-description">{props.children}</div>
                <div className="feedback-footer">
                    <p className="add-feedback-icon" onClick={openModalWindow}><span>&#10011;</span> Add Feedback</p>
                </div>
            </section>
        </div>
        
        <ModalWindow />
    </>);
}

export default Feedback;