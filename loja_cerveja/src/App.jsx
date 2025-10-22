import { useState } from 'react'
import Lista_Produtos from './components/Lista_Produtos'
import Carrinho from './components/Carrinho'

function App() {
  return (
    <>
      <BrowserRouter basename="/MinhaLoja"></BrowserRouter>
      <header className="bg-primary text-white text-center py-3 mb-4">
        <h1 className="m-0">Loja de Cervejas</h1>
      </header>
      <main className="container mb-5">
        <Carrinho />
        <Lista_Produtos />
      </main>
      <footer className="bg-primary text-white text-center py-2 mt-auto">
        Direitos Autorais © 2025
      </footer>
    </>
  )
}

export default App
