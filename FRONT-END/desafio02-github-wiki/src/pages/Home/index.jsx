import gitlogo from "../../assets/github.png"
import { Container } from "./styles"
import Input from "../../components/Input"
import ItemRepo from "../../components/ItemRepo"
import { useState } from "react"
import Button from "../../components/Button"


const Home = () => {
  const [repos, setRepos] = useState([]);



  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt=""/>
      <Input/>
      <Button />    
      <ItemRepo />  
    </Container>
  );
}

export default Home;
