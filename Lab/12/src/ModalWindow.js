import "./App.css";


function ModalWindow() {
    const modalClose = () => document.querySelector(".modal-window").style.display = "none";

    return (<>
        <seciton className="modal-window">
            <div className="modal-content">
                <header className="modal-header">
                    <p>Add Feedback</p>
                    <p className="modal-close" onClick={modalClose}>&#x58;</p>
                </header>

                <main classNam="modal-body">
                    <input type="text" className="modal-comment" placeholder="Type your comment" />
                    <button className="modal-comment-post">Post Feedback</button>
                </main>
            </div>
        </section
    </>);
}

export default ModalWindow;
