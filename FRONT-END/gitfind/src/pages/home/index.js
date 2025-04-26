import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
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
            <div className="perfil">
                <img 
                  src="https://avatars.githubusercontent.com/u/105030970?v=4" 
                  className="imgPerfil"
                  alt=""
                />
                <div>
                  <h3>Victor Teixeira Silva</h3>
                  <span>@victorteixeirasilva</span>
                  <p>Descrição</p>
                </div>
            </div>
            <hr/>
            <div>
              <h4>Repositórios</h4>
              <ItemList title="Tes1" description="teste descrição"/>
              <ItemList title="Tes1" description="teste descrição"/>
              <ItemList title="Tes1" description="teste descrição"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
