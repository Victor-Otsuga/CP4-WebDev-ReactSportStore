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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eveniet!</p>
          <p className="price">R$ 829,41</p>
          <button>Comprar</button>
        </div>
      </Link>
    </>
  );
}
export default ProductCard;
