import { useState } from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';

const App = () => {
    // Here we create a variable and a setVariable that will edit the variable
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
    // Agora vamos usar o setFeeback, porque o que vem como argumento dessa função agora, irá substituir o que temos em feedback. A ideia é, então, fazer com que o setFeedback receba todas as mensagens de feedback menos a que foi deletada, ou seja, menos a que foi passada como argumento da função deleteFeedback
        setFeedback(feedback.filter(item => item.id !== id))

    // O filter irá passar por toda a array (de feedbacks) e filtrará (só irá trazer de volta) os itens que forem diferentes da id que foi passada na função deleteFeedback. Porque na função passamos o id que queremos deletar. E tudo isso é jogado de volta para o setFeedback que será mostrado para o usuário.
        
    }

    return (
        <>
        {/* the props passing here (bgcolor and textColor) could be used inside the component, putting it in the parameters */}
        {/* bgColor='green' textColor='yellow'  */}
        <Header /> 
        <div className="container">
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;