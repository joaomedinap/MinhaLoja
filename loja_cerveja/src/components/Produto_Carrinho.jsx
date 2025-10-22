import React from "react"; 

function Produto_Carrinho({ produto, onExcluir }) {
  const { nome, preco, img, id } = produto;

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
      <button className="btn btn-warning btn-sm" onClick={onExcluir}>
        Excluir
      </button>
    </div>
  );
}

export default Produto_Carrinho;
