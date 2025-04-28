import gitlogo from "../../assets/github.png"
import { Container } from "./styles"
import Input from "../../components/Input"
import ItemRepo from "../../components/ItemRepo"
import { useState } from "react"
import Button from "../../components/Button"
import api from "../../service/api"

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const searchRepos = async () => {

    console.log(currentRepo);
    const {data} = await api.get(`repos/${currentRepo}`)
    
    if (data.id) {
      setRepos(prev => [...prev, data]);
    } else {
      alert("Repositório não encontrado!")
    }
  }



  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt=""/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button funcao={searchRepos}/>    
      {repos.map(repo => <ItemRepo repo={repo}/>)} 
    </Container>
  );
}

export default Home;
