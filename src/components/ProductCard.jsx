import {} from "react";
import Sport4 from "../assets/sport4.jpg";
import "../css/estilo.css";
import SportChuteira from "../assets/sportchuteira.jpg"
import SportConjunto from "../assets/sport.conjunto.jpg"
import SportRaquete from "../assets/sport.raquete.jpg"
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <>
      <Link to="/SingleProduct" className="nostyle tlink">
        <div className="product">
          <img src={Sport4} alt="Ruisse" />
          <h2>Bola de Basquete</h2>
          <p>Bola de Basquete Supreme Grip.</p>
          <p className="price">R$ 150,99</p>
          <button>Comprar</button>
        </div>
      </Link>
      <Link to="/SingleProduct2" className="nostyle tlink">
        <div className="product">
          <img src={SportChuteira} alt="Ruisse" />
          <h2>Chuteira</h2>
          <p>Chuteira Society.</p>
          <p className="price">R$ 179,90</p>
          <button>Comprar</button>
        </div>
      </Link>
      <Link to="/SingleProduct3" className="nostyle tlink">
        <div className="product">
          <img src={SportConjunto} alt="Ruisse" />
          <h2>Conjunto Camiseta e Short</h2>
          <p>Conjunto Camiseta e Shorts Fitness.</p>
          <p className="price">R$ 550,99</p>
          <button>Comprar</button>
        </div>
      </Link>
      <Link to="/SingleProduct4" className="nostyle tlink">
        <div className="product">
          <img src={SportRaquete} alt="Ruisse" />
          <h2>Raquete de Tênis</h2>
          <p>Raquete de Tênis TR160 Lite</p>
          <p className="price">R$ 349,99</p>
          <button>Comprar</button>
        </div>
      </Link>
      
      
    </>
  );
}
export default ProductCard;
