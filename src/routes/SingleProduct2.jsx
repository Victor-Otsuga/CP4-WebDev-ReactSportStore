import {} from "react";
import "../css/estilo.css";
import { Link } from "react-router-dom";
import Sport4 from "../assets/sportchuteira.jpg";

function SingleProduct2() {
  return (
    <>
    
        <section className="product-view">
          <div className="img-view">
          <img src={Sport4} alt="Ruisse" />
          </div>

          <div className="all-info">
            <div className="essential">
              <h1>Chuteira</h1>
              <div className="price-info">
                <p>R$ 150,99</p>
                <p className="min">ou 10x de R$ 16,00</p>
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

export default SingleProduct2;
