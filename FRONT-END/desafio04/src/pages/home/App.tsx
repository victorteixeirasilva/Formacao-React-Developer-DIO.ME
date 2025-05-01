import React from 'react';
import { Conteiner, HomeCont, Titulo, InputAndButtonContainer } from "../home/styles"
import Input from '../../components/Input';
import Botao from '../../components/Botao';
import { useForm } from 'react-hook-form';

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup.string().email("Email invalido").required("Campo Obrigatorio"),
    password: yup.string().min(8, "No minimo 8 caracteres").required("Campo Obrigatorio"),
  })
  .required()
  


const Home = () => {
  const { control, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });
  
  console.log(errors);

  return (
    <HomeCont>
        <Conteiner>
          <Titulo>Login</Titulo>
          <InputAndButtonContainer>
            <Input placeholder='E-mail' control={control} name='email' errorMesage={errors?.email?.message}/>  
            <Input placeholder='Senha' control={control} name='password' type='password' errorMesage={errors?.password?.message}/>  
            <Botao nome='Entrar'disabled={!isValid}/>
          </InputAndButtonContainer>
        </Conteiner>
    </HomeCont>
  );
};

export default Home;
