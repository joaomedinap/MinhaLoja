import { useNavigate } from "react-router-dom";

function PaginaNaoEncontrada() {
  const navigate = useNavigate();

  return (
    <div className="container text-center my-5">
      <h1 className="display-1 text-danger mb-4">404</h1>
      <h2 className="mb-4">Página não encontrada</h2>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Voltar para a página inicial
      </button>
    </div>
  );
}

export default PaginaNaoEncontrada;
