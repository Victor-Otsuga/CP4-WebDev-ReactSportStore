import {} from "react";
import { Link } from "react-router-dom";
import "../css/estilo.css";
import MenuLogo from "../assets/home.png";
import PersonLogo from "../assets/icon_.png";
import LupaLogo from "../assets/lupa_branca.png";
import BrandLogo from "../assets/evo.png";
import BagLogo from "../assets/icon_sacola.png";

function Nav() {
  return (
    <>
      <header className="cabecalho">
        <div>
          <ul className="cabecalho-suporte-contatos">
            <li>
              <button>Fale Conosco</button>
            </li>
            <li>
              <button>Brasil</button>
            </li>
          </ul>
        </div>
        <nav className="cabecalho_nav">
          <div className="frst-part">
            <div className="container-menu">
              <Link to="/" className="nostyle">
                <img src={MenuLogo} alt="icon" id="icone-home" />
              </Link>
            </div>
            <div className="search-size">
              <div className="caixa-de-pesquisa">
                <input
                  type="text"
                  className="caixa-texto"
                  placeholder="Pesquisar"
                />
                <a className="botao-pesquisar" href="#">
                  <img src={LupaLogo} alt="lupa" id="lupa-botao" />
                </a>
              </div>
            </div>
          </div>
          <div className="centralize-logo">
            <div className="container-logo">
            <Link to="/" className="nostyle">
            <img src={BrandLogo} alt="Logo.Ruisse" id="logo" />
              </Link>
              
            </div>

            <div className="container-menu-usuario">
              <a id="conta">
                <span>
                  <Link to="/Sobre" className="nostyle tlink">
                    Sobre
                  </Link>
                </span>
              </a>
              <a id="conta">
                <span>
                  <Link to="/Contato" className="nostyle tlink">
                    Contato
                  </Link>
                </span>
              </a>
              <a id="sacola">
                <span>
                  <Link to="/Produtos" className="nostyle tlink">
                    Produtos
                  </Link>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Nav;
