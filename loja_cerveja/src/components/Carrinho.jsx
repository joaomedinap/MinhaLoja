import ProdutoCarrinho from "./Produto_Carrinho";
import { useNavigate } from "react-router-dom";

function Carrinho({ carrinho = [], removeFromCart, clearCart }) {
  const navigate = useNavigate();

  const itens = (carrinho || []).reduce((s, p) => s + (p.quantidade || 0), 0);
  const total = (carrinho || []).reduce(
    (s, p) => s + (p.preco || 0) * (p.quantidade || 0),
    0
  );

  return (
    <section className="mb-5">
      <button className="btn btn-link mb-3" onClick={() => navigate("/")}>
        Voltar
      </button>
      <h1 className="fw-bold mb-3">Carrinho</h1>
      <div className="bg-secondary bg-opacity-10 p-4 rounded">
        <p className="mb-1 fw-semibold">Itens: {itens}</p>
        <p className="mb-3 fw-semibold">Total: R$ {total}</p>
        <div>
          {(carrinho || []).map((p) => (
            <ProdutoCarrinho
              key={p.id}
              produto={p}
              onExcluir={() => removeFromCart?.(p.id)}
            />
          ))}
        </div>
        <button className="btn btn-danger btn-sm" onClick={() => clearCart?.()}>
          Limpar
        </button>
      </div>
    </section>
  );
}

export default Carrinho;
