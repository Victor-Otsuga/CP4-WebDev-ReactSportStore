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
                <p>R$ 829,41</p>
                <p className="min">ou 10x de R$ 83,99</p>
              </div>
            </div>
            <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eveniet!
            </p>
            <button>Comprar</button>
          </div>
        </section>
     
    </>
  );
}

export default SingleProduct;
