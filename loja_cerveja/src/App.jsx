import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Lista_Produtos from './components/Lista_Produtos'
import Carrinho from './components/Carrinho'
import Pagina_Produto from './components/Pagina_Produto'

function App() {
  return (
    <BrowserRouter basename="/MinhaLoja">
      <header className="text-center py-3 bg-primary text-light">
        <a class="text-decoration-none text-white" href="/MinhaLoja" data-discover="true">
          <h1>Minha Loja</h1>
        </a>
      </header>

      <div className="bg-dark-subtle py-2 mb-4">
        <nav class="container-md py-2">
          <a class="text-decoration-none" href="/MinhaLoja/carrinho" data-discover="true">
            <h1>
              <i class="bi bi-cart"></i>
               Carrinho (0)
            </h1>
          </a>
        </nav>
      </div>
      <main className="container mb-5">
        <Routes>
          <Route path="/" element={
            <>
              <Lista_Produtos />
            </>
          } />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produto/:id" element={<Pagina_Produto />} />
        </Routes>
      </main>
      <footer className="bg-primary text-white text-center py-2 mt-auto">
        Direitos Autorais © 2025
      </footer>
    </BrowserRouter>
  )
}

export default App
