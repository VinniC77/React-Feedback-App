import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
// Precisamos fazer um destructuring porque esse item não é exportado por padrão (export default) no componente
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import Navi from "./components/Navi";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Assim, vamos poder usar o browserRouter (que é pra poder utilizar rotas sem a necessidade do # através da propriedade Router)

const App = () => {

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
                  <FeedbackForm />
                  <FeedbackStats /> 
{/* Não precisamos mais passar o feedback como props porque utilzamos o useContext para passar ele para todos os componentes da aplicação.                   */}
                  <FeedbackList />
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