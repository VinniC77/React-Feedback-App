import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

const FeedbackForm = () => {
  // Na medida em que o usuário escreve seu review, queremos que a propriedade text seja atualizada e para isso, precisamos "setar" a mesma através do useState. setText vai ser responsável por atualizar o valor de text.
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
    // Aqui estamos atualizando o text através do que a setText está recebendo.
  };

  return (
    <Card>
      <form>
        <h2>Como você classificaria sua experiência conosco?</h2>
        <div className="input-group">
          {/* onChange é "disparado" sempre que algo é digitado no input, colocaremos a função que atualiza o setText sempre que algo for mudado ou adicionado no input */}
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Descreva sua experiência"
            value={text}
          />
          <Button type="submit" version="primary" >Enviar</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;