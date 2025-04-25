import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="conteudo">
          <img src={background} className="backgroud" alt=""/>
          <div className="info">
            <div>
              <input type="text" name="usuario" placeholder="@username" readonly/>
              <button>Buscar</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
