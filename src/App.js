import { useState } from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';

const App = () => {
    // Here we create a variable and a setVariable that will edit the variable
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
        {/* the props passing here (bgcolor and textColor) could be used inside the component, putting it in the parameters */}
        {/* bgColor='green' textColor='yellow'  */}
        <Header /> 
        <div className="container">
            <FeedbackList feedback={feedback} />
        </div>
        </>
    )
}

export default App;