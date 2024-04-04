import {} from "react";
import "../css/estilo.css";
import { Link } from "react-router-dom";
import Sport4 from "../assets/sport.conjunto.jpg";

function SingleProduct3() {
  return (
    <>
    
        <section className="product-view">
          <div className="img-view">
          <img src={Sport4} alt="Ruisse" />
          </div>

          <div className="all-info">
            <div className="essential">
              <h1>Conjunto Camiseta e Short</h1>
              <div className="price-info">
                <p>R$ 550,99</p>
                <p className="min">ou 10x de R$ 56,00</p>
              </div>
            </div>
            <p className="desc">
            Conjunto Camiseta e Shorts Fitness.
            </p>
            <button>Comprar</button>
          </div>
        </section>
     
    </>
  );
}

export default SingleProduct3;
