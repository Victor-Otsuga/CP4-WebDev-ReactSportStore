

import {} from "react";
import "../css/estilo.css";
import { Link } from "react-router-dom";
import Sport4 from "../assets/sport.raquete.jpg";

function SingleProduct4() {
  return (
    <>
    
        <section className="product-view">
          <div className="img-view">
          <img src={Sport4} alt="Ruisse" />
          </div>

          <div className="all-info">
            <div className="essential">
              <h1>Raquete de Tênis</h1>
              <div className="price-info">
                <p>R$ 349,99</p>
                <p className="min">ou 10x de R$ 35,00</p>
              </div>
            </div>
            <p className="desc">
            Raquete de Tênis TR160 Lite.
            </p>
            <button>Comprar</button>
          </div>
        </section>
     
    </>
  );
}

export default SingleProduct4;
