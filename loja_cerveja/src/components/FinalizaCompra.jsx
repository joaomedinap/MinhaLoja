function FinalizaCompra() {
    return (
        <main className='container-md py-2'>
            <a className="text-decoration-none" href='/MinhaLoja' data-discover="true">
                <span className="d-block my-2">
                    <i className="bi bi-arrow-left-circle"></i>
                    {' '}Voltar
                </span>
            </a>
            <h1 className="text-success text-center">Itens comprados com sucesso! Beba com moderação!</h1>
        </main>
    );
}

export default FinalizaCompra;