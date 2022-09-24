import { useContext } from 'react'
// Precisamos desse hook para conseguir utilizar o Context
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ handleDelete }) => {
// Podemos extrair o que quer que queiramos do nosso FeedbackContext (tudo que estiver no value desse componente) utilizando o useContext
    const { feedback } = useContext(FeedbackContext) // Assim, não precisamos mais passar o feedback como props

    // console.log(feedback); Always check if the data is correct
    if (!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default FeedbackList