import { useState } from 'react';
import Produtos from './Produtos';
import produtos from '../data/produtos.json';

function Lista_Produtos() {
  const [carrinho, setCarrinho] = useState([]);


  //nao adicionada nada ainda
  const adicionarAoCarrinho = (id) => {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
      setCarrinho([...carrinho, produto]);
    }
  };

  return (
    <section className="mb-5">
      <h3 className="fw-bold mb-4">Lista de Produtos</h3>
      <div className="row g-5">
        {produtos.map(produto => (
          <Produtos
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            avaliacao={produto.avaliacao}
            preco={produto.preco}
            img={produto.img}
            comprar={adicionarAoCarrinho}
          />
        ))}
      </div>
    </section>
  );
}

export default Lista_Produtos;