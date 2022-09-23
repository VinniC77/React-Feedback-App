import { Navigate, useNavigate } from "react-router-dom";

const Navi = () => {
    const status = 200
// Digamos que recebemos um retorno de status de 200 que representa que tudo ocorreu bem.

const navigate = useNavigate() // Não podemos chamar um hook depois de qualquer return

    if(status === 404) {
        return <Navigate to='/notfound' />
    }
// Se algo der errado, usamos o Navigate para direcionar o usuário para a página "Not Found".

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
// Utilizamos o hook useNavigate para redirecionar o usuário para esta rota, quando ele apertar o botão
    }

    return (
        <div>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

export default Navi

// Quando precisarmos redirecionar o usuario, baseado em algo que ele digitou ou que não ocorreu como o esperado, como tratamento de erros, por exemplo, utilizamos o Navigate