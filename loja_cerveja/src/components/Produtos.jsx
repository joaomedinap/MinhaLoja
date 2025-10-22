import { useNavigate } from 'react-router-dom';

function Produtos({ nome, avaliacao, preco, img, id, comprar }) {
  const navigate = useNavigate();

  const estrelasAvaliacao = () => {
    return (
      <div className="d-flex align-items-center justify-content-center gap-1">
        {[...Array(5)].map((_, index) => (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ))}
      </div>
    );
  };

  return (
    <div className="col-6 col-md-3" style={{ width: '15rem' }}>
      <div className="card text-center h-100">
        <img src={img} className="card-img-top" alt={nome} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title"
            onClick={() => navigate(`/produto/${id}`)}
            style={{ cursor: 'pointer' }}
          >
            {nome}
          </h5>
          <div className="mb-2">
            {estrelasAvaliacao()}
            <small className="text-muted ms-1">{avaliacao}</small>
          </div>
          <p className="fw-semibold mb-2">R$ {preco}</p>
          <button
            className="btn btn-outline-success btn-sm w-100 mt-auto"
            onClick={() => comprar(id)}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
