import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Lista_Produtos from './components/Lista_Produtos'
import Carrinho from './components/Carrinho'
import Pagina_Produto from './components/Pagina_Produto'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/MinhaLoja">
      <header className="bg-primary text-white text-center py-3 mb-4">
        <h1 className="m-0">Loja de Cervejas</h1>
      </header>
      <main className="container mb-5">
        <Routes>
          <Route path="/" element={
            <>
              <Carrinho />
              <Lista_Produtos />
            </>
          } />
          <Route path="/produto/:id" element={<Pagina_Produto />} />
        </Routes>
      </main>
      <footer className="bg-primary text-white text-center py-2 mt-auto">
        Direitos Autorais © 2025
      </footer>
    </BrowserRouter>
    </BrowserRouter>
  )
}

export default App
