import { useState } from 'react';
import Produtos from './Produtos';

function Lista_Produtos() {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: 'Amstel', avaliacao: 100, preco: 100, img: '/src/assets/images/amstel.jpg' },
    { id: 2, nome: 'Budweiser', avaliacao: 95, preco: 120, img: '/src/assets/images/bud.jpg' },
    { id: 3, nome: 'Corona', avaliacao: 123, preco: 80, img: '/src/assets/images/corona.jpg' },
    { id: 4, nome: 'Eisenbahn', avaliacao: 110, preco: 90, img: '/src/assets/images/eisenbahn.jpg' },
    { id: 5, nome: 'Estrela Galicia', avaliacao: 88, preco: 85, img: '/src/assets/images/estrela.jpg' },
    { id: 6, nome: 'Heineken', avaliacao: 150, preco: 130, img: '/src/assets/images/heineken.jpg' },
    { id: 7, nome: 'Original', avaliacao: 75, preco: 70, img: '/src/assets/images/original.jpg' },
    { id: 8, nome: 'Patagonia', avaliacao: 92, preco: 95, img: '/src/assets/images/patagonia.jpg' },
    { id: 9, nome: 'Polar', avaliacao: 68, preco: 65, img: '/src/assets/images/polar.jpg' },
  ];

  
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