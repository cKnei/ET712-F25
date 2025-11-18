function Comment( props ) {
    return (<>
        <section className="card">
            <a><img src={props.image} /></a>

            <div className="card-content">
                <a className="card-author">{props.author}</a>
            </div>

            <div className="card-metadata">
                <p>Posted on <span className="card-posted-date">{props.datePosted}</span></p>
            </div>

            <div className="card-comment">
                <p>{props.message}</p>
            </div>
        </section> 
    </>);
}

export default Comment;