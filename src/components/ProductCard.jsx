import {} from "react";
import Sport4 from "../assets/sport4.jpg";
import "../css/estilo.css";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <>
      <Link to="/SingleProduct" className="nostyle tlink">
        <div className="product">
          <img src={Sport4} alt="Ruisse" />
          <h2>Bola de Basquete</h2>
          <p>Bola de Basquete Supreme Grip: ideal para jogadores sérios e amadores, oferece controle superior e durabilidade para jogar em qualquer superfície. Eleva o desempenho com seu design clássico e construção robusta.</p>
          <p className="price">R$ 150,99</p>
          <button>Comprar</button>
        </div>
      </Link>
      
    </>
  );
}
export default ProductCard;
