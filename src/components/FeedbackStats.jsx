import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {

  // Vamos calcular a média de avaliações (soma de todas as avaliações, dividida pela quantidade de avaliações) com reduce. O método de array reduce retorna um único valor. Pode receber um acumulador (que iniciamos em zero) e o valor atual. Depos de obtermos essa soma através do reduce, dividimos pela quantidade de avaliações, ou seja, feedback.length

  let average =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;

    // Agora vamos tratar para que a média tenha apenas um número depois da vírgula e se/quando esse número for zero, que não apareça (que só mostre o número inteiro).
    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      {/* Caso não tenha nenhum feedback, por default, o JS traz NaN. Caso isso aconteça queremos que ele mostre zero */}
    </div>
  );
};

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats;
