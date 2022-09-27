import { useContext } from 'react'
// Precisamos desse hook para conseguir utilizar o Context
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner"

const FeedbackList = () => {
// Podemos extrair o que quer que queiramos do nosso FeedbackContext (tudo que estiver no value desse componente) utilizando o useContext
    const { feedback, isLoading } = useContext(FeedbackContext) // Assim, não precisamos mais passar o feedback como props

    // console.log(feedback); Always check if the data is correct
    if (!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>
    }

    return isLoading ? <Spinner /> : (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList