import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import MenuLogo from '../assets/icon_hamburguer.png'
import PersonLogo from '../assets/icon_.png'
import LupaLogo from '../assets/lupa_branca.png'
import BrandLogo from '../assets/Logo_creme.png'
import BagLogo from '../assets/icon_sacola.png'



function Nav() {
  return (
    <>
      <header class="cabecalho">
      <div>
        <ul class="cabecalho-suporte-contatos">
          <li>
            <button>Fale Conosco</button>
          </li>
          <li>
            <button>Brasil</button>
          </li>
        </ul>
      </div>
      <nav class="cabecalho_nav">
        <div class="frst-part">
          <div class="container-menu">
              <img
                src={MenuLogo}
                alt="icon"
                id="icone-hamburguer"
              />      
          </div>
          <div class="search-size">
            <div class="caixa-de-pesquisa">
              <input type="text" class="caixa-texto" placeholder="Pesquisar" />
              <a class="botao-pesquisar" href="#">
                <img
                  src={LupaLogo}
                  alt="lupa"
                  id="lupa-botao"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="centralize-logo">
          <div class="container-logo">
            <img src={BrandLogo} alt="Logo.Ruisse" id="logo" />
          </div>

          <div class="container-menu-usuario">
            <a id="conta">
              <img
                src={PersonLogo}
                alt="usuario"
                id="icone-usuario"
              />
              <span>Conta</span></a
            >
            <a id="sacola">
              <img
                src={BagLogo}
                alt="sacola"
                id="icone-sacola"
              />
              <span>Minha Sacola</span></a
            >
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
export default Nav;
