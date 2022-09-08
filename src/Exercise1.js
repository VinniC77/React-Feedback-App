function Wherever() {
    const title = "Blog Post";
    const body = "This is my blog post";
    const comments = [
      { id: 1, text: "Comment One" },
      { id: 2, text: "Comment Two" },
      { id: 3, text: "Comment Three" },
    ];
  
    const loading = false;
    const showComments = true;
  
    if (loading) return <h1>Loading...</h1>;
  
    const commentBLock = (
      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    );
  
    return (
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>
  
        {showComments && commentBLock}
      </div>
    );
  }
  
  export default Wherever;
  
  // When you don't need an else statement to throw, which is the case here (where when we want to show the comments we show, when we don't we simply do not display it) we can use && instead of if (with if/else) or if ternario (with ? : )
  
  // And we have been even futher by placing the JSX in a variable (outside the return)
  