import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react"

// O Context fornece uma maneira de passar props entre os componentes sem a necessidade de ficar passando essas props manualmente.

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

// Por enquanto, vamos passar esse item como padrão para entender como o Context funciona.
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is feedback item 1",
            rating: 10
        },
        {
            id: 2,
            text: "This is feedback item 2",
            rating: 10
        },
        {
            id: 3,
            text: "This is feedback item 3",
            rating: 10
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    

    const deleteFeedback = (id) => {
        // Agora vamos usar o setFeeback, porque o que vem como argumento dessa função agora, irá substituir o que temos em feedback. A ideia é, então, fazer com que o setFeedback receba todas as mensagens de feedback menos a que foi deletada, ou seja, menos a que foi passada como argumento da função deleteFeedback
        setFeedback(feedback.filter((item) => item.id !== id));
    
        // O filter irá passar por toda a array (de feedbacks) e filtrará (só irá trazer de volta) os itens que forem diferentes da id que foi passada na função deleteFeedback. Porque na função passamos o id que queremos deletar. E tudo isso é jogado de volta para o setFeedback que será mostrado para o usuário.
      };

    return <FeedbackContext.Provider value={{
        feedback, // que é o mesmo que passar feedback: feedback
        deleteFeedback,
        addFeedback
    }}>
{/* E aqui passamos o feedback pelo value, porque é esse elemento que os outros componentes vão precisar acessar */}
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext