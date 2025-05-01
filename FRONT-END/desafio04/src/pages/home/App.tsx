import React from 'react';
import { Conteiner, HomeCont, Titulo, InputAndButtonContainer } from "../home/styles"
import Input from '../../components/Input';
import Botao from '../../components/Botao';
import { useForm } from 'react-hook-form';


const Home = () => {
  const { watch, control, formState: { errors, isValid } } = useForm();

    
  const form = watch();
  
  console.log(form);

  return (
    <HomeCont>
        <Conteiner>
          <Titulo>Login</Titulo>
          <InputAndButtonContainer>
            <Input placeholder='E-mail' control={control} name='email'/>  
            <Input placeholder='Senha' control={control} name='password'/>  
            <Botao nome='Entrar'/>
          </InputAndButtonContainer>
        </Conteiner>
    </HomeCont>
  );
};

export default Home;
