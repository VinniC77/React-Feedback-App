import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

const App = () => {
    return (
        <>
        {/* the props passing here (bgcolor and textColor) could be used inside the component, putting it in the parameters */}
        {/* bgColor='green' textColor='yellow'  */}
        <Header /> 
        <div className="container">
            <FeedbackItem />
        </div>
        </>
    )
}

export default App;