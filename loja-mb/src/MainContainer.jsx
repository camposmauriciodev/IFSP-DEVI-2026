import { Routes, Route } from 'react-router-dom'
import Loja from './Loja'
import Carrinho from './Carrinho'

export default function MainContainer({ addCarrinho, lista, aumentarQuantidade, diminuirQuantidade, removerItem }){
    return(
        <Routes>
            <Route path='/' element={<Loja addCarrinho={addCarrinho} lista={lista}/>}></Route>
            <Route path='/carrinho' element={<Carrinho lista={lista} aumentarQuantidade={aumentarQuantidade} diminuirQuantidade={diminuirQuantidade} removerItem={removerItem}/>}></Route>
        </Routes>
    )
}