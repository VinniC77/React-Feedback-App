import PropTypes from 'prop-types'
// Como tuod que está na pasta shared (Compartilhado), Button vai ser um componente padrão para quando precisarmos/quisermos criar um botão.
// Esse botão receberá props que serão explicadas abaixo:
// children: todo o conteúdo que será envolto no componente
// version: será primária ou secundária, dependendo do objetivo do botão
// type: se será um submit Button ou um botão qualquer.
// isDisabled: receberá um boolean, se receber um true, será um botão desabilitado, se não for passado nada nessa propriedade, o botão estará ativo.

const Button = ({ children, version, type, isDisabled }) => {
    return (

// Na className, vamos querer que a classe btn sempre venha junto, pois já está estilizada no index.css global, com o version é que diremos se será um botão com estilização primária ou secundária, também já previamente estilizada no index.css        
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}


// Aqui definimos as opções que vem por padrão (se não forem explícitas quando o componente for chamado.)
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button