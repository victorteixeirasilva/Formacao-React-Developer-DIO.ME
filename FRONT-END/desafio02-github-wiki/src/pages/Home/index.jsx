import gitlogo from "../../assets/github.png"
import { Container } from "./styles"
import Input from "../../components/Input"

const Home = () => {
  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt=""/>
      <Input/>      
    </Container>
  );
}

export default Home;
