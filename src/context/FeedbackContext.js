import { createContext, useState } from "react"

// O Context fornece uma maneira de passar props entre os componentes sem a necessidade de ficar passando essas props manualmente.

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

// Por enquanto, vamos passar esse item como padrão para entender como o Context funciona.
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Esse texto vem de Context",
            rating: 10
        }
    ])

    return <FeedbackContext.Provider value={{
        feedback // que é o mesmo que passar feedback: feedback
    }}>
{/* E aqui passamos o feedback pelo value, porque é esse elemento que os outros componentes vão precisar acessar */}
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext