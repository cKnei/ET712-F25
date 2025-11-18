import "./App.css";

function ModalWindow( props ) {
    const closeModalWindow = () => 
        document.querySelector(".modal-window").style.display = "none";

    const postComment = () => {
        let inputArea = document.querySelector(".modal-comment-input");
        const commentList = document.querySelector(".post-comment-list");
        const modalUsername = document.querySelector(".modal-username").textContent;
        const postDate = new Date().toLocaleDateString();

        commentList.innerHTML += `<li><em><b>${modalUsername}</b></em> --- ${inputArea.value} --- <span style="font-size:0.8rem;color:gray;">Posted On: ${postDate}</span></li>`;
    
        inputArea.value = "";
        closeModalWindow();
    }

    return (<>
        <section className="modal-window">
            <div className="modal-content">
                <header className="modal-header">
                    <p>Add Feedback <b className="modal-username"></b></p>
                    <p className="modal-close" onClick={closeModalWindow}>&#x58;</p>
                </header>

                <main className="modal-main">
                    <input className="modal-comment-input" type="text" placeholder="Type your comment..." />
                    <button className="modal-comment-post-button" onClick={postComment}>Post Feedback</button>
                </main>
            </div>
        </section>
    </>);
}

export default ModalWindow;