import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
// Precisamos fazer um destructuring porque esse item não é exportado por padrão (export default) no componente
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import Navi from "./components/Navi";

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Assim, vamos poder usar o browserRouter (que é pra poder utilizar rotas sem a necessidade do # através da propriedade Router)
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // Here we create a variable and a setVariable that will edit the variable
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    // uuid é uma biblioteca para gerar ID's únicas para quando necessitarmos, depois de instalada a importada, basta executar, junto do código em que queremos uma ID.
    newFeedback.id = uuidv4();

    // Depois do novo feedback ser criado e receber uma ID, precisamos "adicioná-los" aos outros feedbacks
    setFeedback([newFeedback, ...feedback]);
    // Assim, estamos setando o array de feedbacks, adicionando o novo feedback ao array + os feedbacks atuais.
  };

  const deleteFeedback = (id) => {
    // Agora vamos usar o setFeeback, porque o que vem como argumento dessa função agora, irá substituir o que temos em feedback. A ideia é, então, fazer com que o setFeedback receba todas as mensagens de feedback menos a que foi deletada, ou seja, menos a que foi passada como argumento da função deleteFeedback
    setFeedback(feedback.filter((item) => item.id !== id));

    // O filter irá passar por toda a array (de feedbacks) e filtrará (só irá trazer de volta) os itens que forem diferentes da id que foi passada na função deleteFeedback. Porque na função passamos o id que queremos deletar. E tudo isso é jogado de volta para o setFeedback que será mostrado para o usuário.
  };

  return (
    <FeedbackProvider>
      {/* Aqui estamos envolvendo toda a aplicação para que o Context seja acessado por todos os componentes aqui dentro */}
      <Router>
        {/* the props passing here (bgcolor and textColor) could be used inside the component, putting it in the parameters */}
        {/* bgColor='green' textColor='yellow'  */}
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats /> 
{/* Não precisamos mais passar o feedback como props porque utilzamos o useContext para passar ele para todos os componentes da aplicação.                   */}
                  <FeedbackList
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            >
              {/* Precisamos adicionar o exact para o React saber que deve mostrar a página inicial somente quando for exatamente a home que for chamada, ou seja, somente quando a / for chamada */}
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id/:name" element={<Post />} />
            <Route path="/navi" element={<Navi />} />
            {/* Aqui podemos pegar a URL que o usuario irá digitar de acordo com o id, e mostrar o conteúdo dese endereço, lhe enviando de volta o componente Post */}
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
    // Com as rotas, vamos querer apenas uma rota para a AboutPage e outra rota para o restante dos componentes.
  );
};

export default App;
