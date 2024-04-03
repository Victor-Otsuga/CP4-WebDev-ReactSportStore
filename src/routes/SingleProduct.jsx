import {} from "react";
import "../css/estilo.css";
import { Link } from "react-router-dom";
import Sport4 from "../assets/sport4.jpg";

function SingleProduct() {
  return (
    <>
    
        <section className="product-view">
          <div className="img-view">
          <img src={Sport4} alt="Ruisse" />
          </div>

          <div className="all-info">
            <div className="essential">
              <h1>Bola de Basquete</h1>
              <div className="price-info">
                <p>R$ 150,99</p>
                <p className="min">ou 10x de R$ 16,00</p>
              </div>
            </div>
            <p className="desc">
            Bola de Basquete Supreme Grip: ideal para jogadores sérios e amadores, oferece controle superior e durabilidade para jogar em qualquer superfície. Eleva o desempenho com seu design clássico e construção robusta.
            </p>
            <button>Comprar</button>
          </div>
        </section>
     
    </>
  );
}

export default SingleProduct;
