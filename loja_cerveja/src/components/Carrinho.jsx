import React from "react";
import ProdutoCarrinho from "./Produto_Carrinho";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function Carrinho({ carrinho = [], removeFromCart, clearCart, atualizaQuantidade }) {
  const navigate = useNavigate();

  const itens = (carrinho || []).reduce((s, p) => s + (p.quantidade || 0), 0);
  const total = (carrinho || []).reduce((s, p) => s + ((p.preco || 0) * (p.quantidade || 0)), 0);

  if (itens === 0) {
    return (
      <section className="mb-5">
        <button className="btn btn-link mb-3" onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left-circle me-1"></i>
          Voltar
        </button>
        <div className="bg-secondary bg-opacity-10 p-4 rounded">
          <h3 className="mb-0">Carrinho Vazio.</h3>
        </div>
      </section>
    );
  } else {

    return (
      <section className="mb-5">
        <button className="btn btn-link mb-3" onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left-circle me-1"></i>
          Voltar
        </button>
        <div className="bg-secondary bg-opacity-10 p-4 rounded">
          <p className="mb-1 fw-semibold">Itens: {itens}</p>
          <p className="mb-3 fw-semibold">Total: R$ {total}</p>
          <div>
            {(carrinho || []).map((p) => (
              <ProdutoCarrinho
                key={p.id}
                produto={p}
                onExcluir={() => removeFromCart?.(p.id)}
                atualizaQuantidade={atualizaQuantidade}
              />
            ))}
          </div>
        </div>
        <button className="btn btn-danger btn-sm mt-3 ms-5" onClick={() => clearCart?.()}>Limpar</button>
        <button className="btn btn-success btn-sm float-end mt-3 me-5" onClick={() => { navigate('/finalizar-compra'); clearCart?.(); }}>Finalizar Compra</button>
      </section>
    );

  }
}

export default Carrinho;

Carrinho.propTypes = {
  carrinho: PropTypes.array,
  removeFromCart: PropTypes.func,
  clearCart: PropTypes.func,
  atualizaQuantidade: PropTypes.func,
};