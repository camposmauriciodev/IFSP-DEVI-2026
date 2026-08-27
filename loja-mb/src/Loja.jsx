import hero from './assets/hero.png'
import oleo from './assets/óleo.png'
import panela from './assets/panela.png'
import butijao from './assets/butijão.png'
import geladeira from './assets/geladeira.png'
import sacola from './assets/sacola.png'
import tigrinho from './assets/tigrinho.png'
import tampao from './assets/tampao.png'
import ingresso from './assets/ingresso.png'
import boleto from './assets/boleto.png'
import batida from './assets/batida.png'
import papel from './assets/papel.png'
import cubo from './assets/cubo.png'
import desconto from './assets/desconto.png'
import gilette from './assets/gilette.png'
import marreta from './assets/marreta.png'
import brega from './assets/brega.png'

export default function Loja({ addCarrinho, lista }){ 
    const total = lista.reduce((total, item) => total + item.preco * item.quantidade, 0)
    const produtos = [
        {
            id: 1,
            titulo : "Óleo de Cozinha em Pó",
            valor : 12.89,
            imagem : oleo
        },
        {
            id: 2,
            titulo : "Panela de Madeira",
            valor : 8.00,
            imagem : panela
        },
        {
            id: 3,
            titulo : "Butijão de Gás Chernobyl",
            valor : 49.99,
            imagem : butijao
        },
        {
            id: 4,
            titulo : "Geladeira Descartável 20 Un",
            valor : 2980.00,
            imagem : geladeira
        },
        {
            id: 5,
            titulo : "Sacola a Prova D'Água com Furos Respiratórios",
            valor : 1.00,
            imagem : sacola
        },
        {
            id: 6,
            titulo : "Tigrinho Premium",
            valor : 2*total,
            imagem : tigrinho
        },
        {
            id: 7,
            titulo : "Tampão de Olho Transparente - ConfortDreams",
            valor : 27.59,
            imagem : tampao
        },
        {
            id: 8,
            titulo : "Ingresso Azerbaijão X Uzbequistão - Copa do Mundo 2050",
            valor : 425.90,
            imagem : ingresso
        },
        {
            id: 9,
            titulo : "Boletim 12x Sem Juros",
            valor :  -11*(total / 12),
            imagem : boleto
        },
        {
            id: 10,
            titulo : "Batida de Água, Gelo, Suor, Vinho, Alvejante",
            valor : 8.00,
            imagem : batida
        },
        {
            id: 11,
            titulo : "Papel Higiênico Anti Derrapante Reutilizável 3 em 1 (Lixa, Cola e Refresca) 12 unid",
            valor : 18.00,
            imagem : papel
        },
        {
            id: 12,
            titulo : "Cubo Mágico Redondo All Black",
            valor : 5.00,
            imagem : cubo
        },
        {
            id: 13,
            titulo : "Desconto Comestível",
            valor : -20.00,
            imagem : desconto
        },
        {
            id: 14,
            titulo : "Jogo de Gilette Cega C/ Cão Guia Kg/'²",
            valor : 150.00,
            imagem : gilette
        },
        {
            id: 15,
            titulo : "Marreta de Demolição 100% Vidro",
            valor : 200.00,
            imagem : marreta
        },
        {
            id: 16,
            titulo : "Brega Funk 2026 Ingresso",
            valor : total**total,
            imagem : brega
        }
    ]

    return(
        <>
            <main className="lista-produtos">
                {produtos.map(produto => (
                    <article className="produto" key={produto.id}>
                        <img className="produto-imagem" src={produto.imagem} alt={produto.titulo} />
                        <h1 className="produto-titulo">{produto.titulo}</h1>
                        <p className="produto-valor">{produto.valor.toFixed(2)}</p>
                        <button className="produto-botao" onClick={() => addCarrinho(produto)}>Adicionar ao Carrinho</button>
                    </article>
                ))}
            </main>
        </>
    )
}