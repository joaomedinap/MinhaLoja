import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import produtos from "../data/produtos.json";

function Pagina_Produto({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantidade] = useState(1);
  const estrelasAvaliacao = () => {
    return (
      <div className="d-flex gap-1">
        {[...Array(5)].map((_, index) => (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ))}
      </div>
    );
  };

  const produto = produtos.find((p) => p.id === parseInt(id));
  const { nome, avaliacao, preco, img, descricao } = produto;

  const adicionarAoCarrinho = () => {
    const produtoCarrinho = {
      id: produto.id,
      nome,
      avaliacao,
      preco,
      img,
      quantidade,
    };
    addToCart(produtoCarrinho);
  };

  return (
    <div className="container">
      <button className="btn btn-link mb-3" onClick={() => navigate("/")}>
        <i className="bi bi-arrow-left-circle me-1"></i>
        Voltar
      </button>
      <div className="row">
        <div className="col-md-6">
          <img src={img} alt={nome} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1>{nome}</h1>
          <div className="mb-3">
            <div className="mr-5">{estrelasAvaliacao()}</div>
            <small className="text-muted ms-2">({avaliacao} avaliações)</small>
          </div>
          <h3 className="text-success mb-4">R$ {preco}</h3>
          <div className="mb-4">
            <p>{descricao}</p>
          </div>
          <button
            className="btn btn-success btn-lg w-100"
            onClick={adicionarAoCarrinho}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagina_Produto;
