import { useParams } from "react-router-dom";
// Para acessarmos os parametros da URL, precisamos importar o hook useParams

const Post = () => {
  const params = useParams(); // It's a convention to use the name params when we use useParams()

  return (
    <div>
      <h1>Post {params.id}</h1>
      {/* Normalmente seusa esse tipo de abordagem quando quremos que o backend mostre alguma coisa para o usuario baseado na URL ou id que ele digitou. */}
      <p>Name: {params.name}</p>
      {/* Podemos pegar mais de uma referencia passada na URL */}
    </div>
  );
};

export default Post;

// Para podermos acessar ou mostrar para o usuário em qual parte do seite ele está, podemos usar o params do React
