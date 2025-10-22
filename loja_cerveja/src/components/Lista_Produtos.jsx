import Produtos from './Produtos';
import produtos from '../data/produtos.json';
import PropTypes from 'prop-types';

function Lista_Produtos({ addToCart }) {
  const handleComprar = (id) => {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    const produtoCarrinho = {
      id: produto.id,
      nome: produto.nome,
      avaliacao: produto.avaliacao,
      preco: produto.preco,
      img: produto.img,
      quantidade: 1,
    };
    addToCart(produtoCarrinho);
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
            comprar={handleComprar}
          />
        ))}
      </div>
    </section>
  );
}

export default Lista_Produtos;

Lista_Produtos.propTypes = {
  addToCart: PropTypes.func.isRequired,
};