import React from 'react'
import {InputContainer} from "./styles"
import { Controller } from 'react-hook-form';
import { IInputProps } from './types';


const Input = ({control, name, errorMesage, ...rest }: IInputProps)  => {
  
  return (
    <InputContainer>
      <Controller
        control={control}
        name={name}
        defaultValue="" // Adicionando um valor inicial
        render={({ field: { onChange, onBlur, value = "", ref } }) => (
          <input
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value} // Evita que seja undefined
            ref={ref}
          />
        )}
      />
      {errorMesage ? <p>{errorMesage}</p> : null}
    </InputContainer>
  )
}
export default Input
