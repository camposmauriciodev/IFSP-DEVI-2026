export default function Carrinho({ lista, aumentarQuantidade, diminuirQuantidade, removerItem }){
    const total = lista.reduce((total, item) => total + item.preco * item.quantidade, 0)
    return(
        <>
            <div className="carrinho">
                {lista.map(item => (
                    <div className="produto-carrinho" key={item.id}>
                        <img className="imagem-carrinho" src={item.imagem} alt={item.nome} />
                        <h1 className="produto-titulo">{item.nome}</h1>
                        <p className="produto-valor">R$ {item.preco.toFixed(2)}</p>
                        <button className="botao-diminuir" onClick={() => diminuirQuantidade(item.id)}>-</button>
                        <p className="produto-quantidade">Quantidade: {item.quantidade}</p>
                        <button className="botao-aumentar" onClick={() => aumentarQuantidade(item.id)}>+</button>
                        <p className="produto-subtotal">Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                        <button className="botao-remover" onClick={() => removerItem(item.id)}>Remover</button>
                    </div>
            ))}
            <h2 className="total">Total: R$ {total.toFixed(2)}</h2>
            </div>
            <button className="botao-pagamento">Pagamento</button>
        </>
    )
}