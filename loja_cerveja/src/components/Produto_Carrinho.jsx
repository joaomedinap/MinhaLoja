function Produto_Carrinho({ produto, onExcluir, atualizaQuantidade }) {
  const { nome, preco, img, id, quantidade } = produto;

  const aumentar = () => {
    atualizaQuantidade(id, quantidade + 1);
  };

  const diminuir = () => {
    if (quantidade > 1) {
      atualizaQuantidade(id, quantidade - 1);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-between bg-white border rounded p-2 mb-2">
      <div className="d-flex align-items-center">
        <img
          src={img}
          className="me-3 rounded"
          alt={nome}
          style={{ width: "100px", height: "70px", objectFit: "cover" }}
        />
        <div>
          <div className="fw-semibold">{nome}</div>
          <small className="text-dark">R$ {preco}</small>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <i
          className="bi bi-dash-circle"
          style={{ color: "red", cursor: "pointer" }}
          onClick={diminuir}
        ></i>
        <span
          className="fw-bold px-3"
          style={{ minWidth: "40px", textAlign: "center" }}
        >
          {quantidade}
        </span>
        <i
          className="bi bi-plus-circle"
          style={{ color: "green", cursor: "pointer" }}
          onClick={aumentar}
        ></i>
        <div>
          <button className="btn btn-warning btn-sm ms-3" onClick={onExcluir}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Produto_Carrinho;
