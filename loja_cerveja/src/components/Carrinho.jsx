import React, { useState } from "react";
import Produto_Carrinho from "./Produto_Carrinho";

function Carrinho() {
  const [produtos, setProdutos] = useState([
    { id: 9, nome: "Polar", avaliacao: 68, preco: 65, img: "/src/assets/images/polar.jpg" },
    { id: 10, nome: "Heineken", avaliacao: 92, preco: 72, img: "/src/assets/images/heineken.jpg" },
  ]);

  const removerProduto = (id) => {
    setProdutos(produtos.filter((p) => p.id !== id));
  };

  return (
    <section className="mb-5">
      <h3 className="fw-bold mb-3">Carrinho</h3>
      <div className="bg-secondary bg-opacity-10 p-4 rounded">
        <p className="mb-1 fw-semibold">Itens: 0</p>
        <p className="mb-3 fw-semibold">Total: R$ 0</p>
        <div>
          {produtos.map((p) => (
            <Produto_Carrinho
              key={p.id}
              produto={p}
              onExcluir={() => removerProduto(p.id)}
            />
          ))}
        </div>
        <button className="btn btn-danger btn-sm">Limpar</button>
      </div>
    </section>
  );
}

export default Carrinho;