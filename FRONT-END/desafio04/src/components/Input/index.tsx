import React from 'react'
import {InputContainer} from "./styles"
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { IInputProps } from './types';
  

const Input = ({control, name, ...rest }: IInputProps)  => {
  const { watch } = useForm();
  
  const form = watch();

  console.log(form);
  
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
    </InputContainer>
  )
}
export default Input
