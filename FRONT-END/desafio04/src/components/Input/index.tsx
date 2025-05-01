import React from 'react'
import {InputContainer} from "./styles"


  

const Input = ({ placeholder }: { placeholder: string })  => {
  return (
    <InputContainer>
        <input type="text" placeholder={placeholder}/>      
    </InputContainer>
  )
}
export default Input
