import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import Header from './Header'
import MainContainer from './MainContainer'
import Footer from './Footer'

function Main() {
    const [ lista, setLista ] = useState([]);
      
    function addCarrinho(produto) {
        setLista(lista => {
            const itemExiste = lista.some(
                item => item.id === produto.id
            )

            if (itemExiste) {
                return lista.map(item =>
                    item.id === produto.id
                        ? {
                            ...item,
                            quantidade: item.quantidade + 1
                        }
                        : item
                )
            }

            return [
                ...lista,
                {
                    id: produto.id,
                    nome: produto.titulo,
                    preco: produto.valor,
                    imagem: produto.imagem,
                    quantidade: 1
                }
            ]
        })
    }
    
    function aumentarQuantidade(id) {
      setLista(lista =>
          lista.map(item =>
              item.id === id
                  ? { ...item, quantidade: item.quantidade + 1 }
                  : item
          )
      )
    }

    function diminuirQuantidade(id) {
        setLista(lista =>
            lista.map(item =>
                item.id === id && item.quantidade > 1
                    ? { ...item, quantidade: item.quantidade - 1 }
                    : item
            )
        )
    }

    function removerItem(id) {
        setLista(lista =>
            lista.filter(item => item.id !== id)
        )
    }

    return(
      <>
        <Header carrinho={lista.length}/>
        <MainContainer 
          addCarrinho={addCarrinho}
          lista={lista}
          aumentarQuantidade={aumentarQuantidade}
          diminuirQuantidade={diminuirQuantidade}
          removerItem={removerItem}
        />
        <Footer />
      </>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>,
)
