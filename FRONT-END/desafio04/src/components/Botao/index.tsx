import React from 'react'
import {BotaoContainer} from "./styles"


const boa = () => {
  alert("boaaa")
}

const Botao = ({ nome, disabled }: { nome: string, disabled: boolean })  => {
  return (
    <BotaoContainer>
       <button disabled={disabled} onClick={boa}>{nome}</button>     
    </BotaoContainer>
  )
}
export default Botao
