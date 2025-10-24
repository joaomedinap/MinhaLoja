import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListaProdutos from "./components/Lista_Produtos";
import Carrinho from "./components/Carrinho";
import PaginaProduto from "./components/Pagina_Produto";
import FinalizaCompra from "./components/FinalizaCompra";
import PaginaNaoEncontrada from "./components/PaginaNaoEncontrada";

function App() {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
      return JSON.parse(carrinhoSalvo);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const addToCart = (produtoCarrinho) => {
    setCarrinho((prev) => {
      const existente = prev.find((p) => p.id === produtoCarrinho.id);
      if (existente) {
        return prev.map((p) =>
          p.id === produtoCarrinho.id
            ? {
                ...p,
                quantidade:
                  (p.quantidade || 0) + (produtoCarrinho.quantidade || 0),
              }
            : p
        );
      }
      return [...prev, produtoCarrinho];
    });
  };

  const removeFromCart = (id) =>
    setCarrinho((prev) => prev.filter((p) => p.id !== id));

  const clearCart = () => setCarrinho([]);

  const atualizaQuantidade = (id, novaQuantidade) => {
    setCarrinho((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantidade: novaQuantidade } : p))
    );
  };

  const totalItens = carrinho.reduce((s, p) => s + (p.quantidade || 0), 0);

  return (
    <BrowserRouter basename="/MinhaLoja">
      <header className="text-center py-3 bg-primary text-light">
        <Link className="text-decoration-none text-white" to="/">
          <h1>Minha Loja</h1>
        </Link>
      </header>

      <div className="bg-dark-subtle">
        <nav className="container-md py-2">
          <Link className="text-decoration-none" to="/carrinho">
            <h1>
              <i className="bi bi-cart"></i>
              Carrinho ({totalItens})
            </h1>
          </Link>
        </nav>
      </div>
      <main className="container mb-5 py-2">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ListaProdutos addToCart={addToCart} />
              </>
            }
          />
          <Route
            path="/carrinho"
            element={
              <Carrinho
                carrinho={carrinho}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                atualizaQuantidade={atualizaQuantidade}
              />
            }
          />
          <Route
            path="/produto/:id"
            element={<PaginaProduto addToCart={addToCart} />}
          />
          <Route path="/finalizar-compra" element={<FinalizaCompra />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </main>
      <footer className="bg-primary text-white text-center py-2 mt-auto">
        Direitos Autorais © 2025
      </footer>
    </BrowserRouter>
  );
}

export default App;
