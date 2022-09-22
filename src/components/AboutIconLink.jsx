import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

// Esse componente é um Ponto de Interrogação que ficará no canto inferior direito e irá levar para a página de About

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

// Quando tivermos LINKS INTERNOS, ao invés de utilizar a tag <a>, devemos utilizar o componente <Link />, isso fará com que no client-side a página carregue mais rapidamente. Esse componente é importado pelo react-router-dom. Para usar links externos não há problema em utilizar a tag <a>

export default AboutIconLink;
