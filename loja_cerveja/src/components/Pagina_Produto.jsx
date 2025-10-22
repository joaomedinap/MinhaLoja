import React, { useState } from "react";

function Pagina_Produto({ produto }) {
    const { nome, avaliacao, preco, img } = produto;
    const [quantidade, setQuantidade] = useState(1);

    const adicionarAoCarrinho = () => {
        const produtoCarrinho = {
            id: produto.id,
            nome,
            avaliacao,
            preco,
            img,
            quantidade
        };
    };

    return (
        <div>
            <h1>{nome}</h1>
            <img src={img} alt={nome} />
            <p>Avaliação: {avaliacao}</p>
            <p>Preço: {preco}</p>
            <input
                type="number"
                value={quantidade}
            />
            <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
        </div>
    );
}
