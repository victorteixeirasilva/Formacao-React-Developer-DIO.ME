import React from 'react'

import { ButtonContainer } from "./styles"

const Button = ({funcao}) => {
  return (
    <ButtonContainer onClick={funcao}>Buscar</ButtonContainer>
  )
}

export default Button
