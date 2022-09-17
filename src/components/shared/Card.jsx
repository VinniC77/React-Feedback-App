import PropTypes from 'prop-types'

// This Card component will be used to set a design of the card whenever we want to use it in multiple places


// Tudo que esta dentro do elemento Card em FeedbackItem é um children do componente Card e pode ser passado pra cá como props para receber o estilo
const Card = ({ children, reverse }) => {
    return (

// EXEMPLO DE CONDIÇÃO POR CLASSE. Basicamente estamos dizendo que a classe card sempre estará disponível, mas se reverse for true, então queremos o estilo reverse reverse
        // <div className={`card ${reverse && 'reverse'}`}>
        //     {children}
        // </div>


// EXEMPLO DE CONDIÇÃO POR ESTILO. Se preferirmos essa abordagem, não precisamos criar a classe reverse no CSS. Aqui estamos criando uma condição para que quando o reverse for true, backgroundColor e color assumam essas configurações        
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#FFF',
            color: reverse ? '#FFF' : 'rgb(0, 0, 0)'
        }}>{children}</div>
    )
}

export default Card

// Now that we've been created the component Card, we have a 'Style Component' and we can wrapped any other element if we want them to have as aspect of a card

// Sobre o reverse -
// Existe a possibilidade de usar o reverse (que seriam as cores reversas para cor de background e de texto)
// Existem duas formas de "criar" uma condição para o reverse:
// 1 - Através da criação de uma classe .reverse no CSS e fazer o condicionamento através de classe
// 2 - Através de condição de estilo, quando chamamos as configurações, conforme acima

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}