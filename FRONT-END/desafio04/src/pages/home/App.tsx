import React from 'react';
import { Conteiner, HomeCont, Titulo, InputAndButtonContainer } from "../home/styles"
import Input from '../../components/Input';
import Botao from '../../components/Botao';

const Home = () => {
  return (
    <HomeCont>
        <Conteiner>
          <Titulo>Login</Titulo>
          <InputAndButtonContainer>
            <Input placeholder='E-mail'/>  
            <Input placeholder='Senha'/>  
            <Botao nome='Entrar'/>
          </InputAndButtonContainer>
        </Conteiner>
    </HomeCont>
  );
};

export default Home;
