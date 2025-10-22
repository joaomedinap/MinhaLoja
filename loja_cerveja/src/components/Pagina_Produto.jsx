import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Pagina_Produto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantidade, setQuantidade] = useState(1);
    const produtos = [
        { id: 1, nome: 'Amstel', avaliacao: 100, preco: 100, img: '/src/assets/images/amstel.jpg', descricao: 'Cerveja Amstel, leve e refrescante.' },
        { id: 2, nome: 'Budweiser', avaliacao: 95, preco: 120, img: '/src/assets/images/bud.jpg', descricao: 'Cerveja Budweiser, sabor clássico.' },
        { id: 3, nome: 'Corona', avaliacao: 123, preco: 80, img: '/src/assets/images/corona.jpg', descricao: 'Cerveja Corona, refrescante e leve.' },
        { id: 4, nome: 'Eisenbahn', avaliacao: 110, preco: 90, img: '/src/assets/images/eisenbahn.jpg', descricao: 'Cerveja Eisenbahn, sabor marcante.' },
        { id: 5, nome: 'Estrela Galicia', avaliacao: 88, preco: 85, img: '/src/assets/images/estrela.jpg', descricao: 'Cerveja Estrela Galicia, sabor único.' },
        { id: 6, nome: 'Heineken', avaliacao: 150, preco: 130, img: '/src/assets/images/heineken.jpg', descricao: 'Cerveja Heineken, a clássica.' },
        { id: 7, nome: 'Original', avaliacao: 75, preco: 70, img: '/src/assets/images/original.jpg', descricao: 'Cerveja Original, sabor autêntico.' },
        { id: 8, nome: 'Patagonia', avaliacao: 92, preco: 95, img: '/src/assets/images/patagonia.jpg', descricao: 'Cerveja Patagonia, sabor intenso.' },
        { id: 9, nome: 'Polar', avaliacao: 68, preco: 65, img: '/src/assets/images/polar.jpg', descricao: 'Cerveja Polar, refrescante e leve.' },
    ];
    const estrelasAvaliacao = () => {
        return (
            <div className="d-flex align-items-center justify-content-center gap-1">
                {[...Array(5)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill text-warning"></i>
                ))}
            </div>
        );
    };

    const produto = produtos.find(p => p.id === parseInt(id));
    const { nome, avaliacao, preco, img, descricao } = produto;

    const adicionarAoCarrinho = () => {
        const produtoCarrinho = {
            id: produto.id,
            nome,
            avaliacao,
            preco,
            img,
            quantidade,
        };
    };

    return (
        <div className="container">
            <button className="btn btn-link mb-3" onClick={() => navigate('/')}>
                Voltar
            </button>
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt={nome} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h1>{nome}</h1>
                    <div className="mb-3">
                        <div className="mr-5">{estrelasAvaliacao()}</div>
                        <small className="text-muted ms-2">({avaliacao} avaliações)</small>
                    </div>
                    <h3 className="text-success mb-4">R$ {preco}</h3>
                    <div className="mb-4">
                        <p>{descricao}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantidade:</label>
                        <input
                            type="number"
                            className="form-control"
                            style={{ maxWidth: '100px' }}
                            value={quantidade}
                            min="1"
                            onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
                        />
                    </div>
                    <button
                        className="btn btn-success btn-lg w-100"
                        onClick={adicionarAoCarrinho}
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pagina_Produto;