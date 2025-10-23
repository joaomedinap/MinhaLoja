import Produtos from "./Produtos";
import produtos from "../data/produtos.json";

function Lista_Produtos({ addToCart }) {
  const handleComprar = (id) => {
    const produto = produtos.find((p) => p.id === id);
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
      <h1 className="fw-bold mb-4">Lista de Produtos</h1>
      <div className="row g-5">
        {produtos.map((produto) => (
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
