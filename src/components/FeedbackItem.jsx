const FeedbackItem = ({ item }) => {

    // This is an example on how things work with useState:
    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1;
    //     });
    // }

    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}
        </div>
    )
}

export default FeedbackItem