import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

const FeedbackForm = ({ handleAdd }) => {
  // Na medida em que o usuário escreve seu review, queremos que a propriedade text seja atualizada e para isso, precisamos "setar" a mesma através do useState. setText vai ser responsável por atualizar o valor de text.
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true); // O botão estará desabilitado até a mensagem atingir ao menos 10 caracteres
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if(text === '') { // Se o texto for vazio
      setBtnDisabled(true) // O botão de enviar estará desabilitado
      setMessage(null) // E a mensagem não será exibida ainda.

    } else if (text !== '' && text.trim().length <= 10) { // Se tiver texto, mas o comprimento é menor que 10
      setBtnDisabled(true) // O botão ainda está desabilitado
      setMessage('A avaliação precisa ter ao menos 10 palavras')

    } else {
      setBtnDisabled(false) // Se tiver texto maior que 10, o botão de envio é habilitado.
      setMessage(null) // E a mensagem de alerta não aparece.
    }

    setText(e.target.value);
    // Aqui estamos atualizando o text através do que a setText está recebendo.
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) { // Aqui testamos novamente se existem mais de 10 caracteres.
      // Se sim, se cria um novo feedback, com o texto e a nota de avaliação
      const newFeedback = {
        text, // Aqui é o mesmo que dizer text: text
        rating // Aqui é o mesmo que dizer rating: rating
      }

      handleAdd(newFeedback) // Aqui estamos enviado pro Add o novo feedback através da função recebida por props no componente FeedbackForm

      setText('') // Aqui, estamos simplesmente limpando o input depois de adicionar o novo feedback.
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Como você classificaria sua experiência conosco?</h2>
        <RatingSelect select={rating => setRating(rating)} />
{/* Assim, através da função select passada aqui e importada em Rating Select por props, conseguimos trazer do componente RatingSelect o que foi digitado pelo usuario como nota da avaliação */}

        <div className="input-group">
          {/* onChange é "disparado" sempre que algo é digitado no input, colocaremos a função que atualiza o setText sempre que algo for mudado ou adicionado no input */}
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Descreva sua experiência"
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled} >Enviar</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      {/* Se houver mensagem, crie uma div com a classe message e exiba a mensagem dentro da div */}
      </form>
    </Card>
  );
};

export default FeedbackForm;

// Aqui temos uma validação. O botão só estará disponível para enviar o feedback se a mensagem tiver ao menos 10 caracteres, sem contar os espaços em branco (que tratamos com a função .trim())