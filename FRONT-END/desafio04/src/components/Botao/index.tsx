import React from 'react'
import {BotaoContainer} from "./styles"


  

const Botao = ({ nome }: { nome: string })  => {
  return (
    <BotaoContainer>
       <button>{nome}</button>     
    </BotaoContainer>
  )
}
export default Botao
