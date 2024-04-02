import {} from "react";
import "../css/estilo.css";
import Sport1 from "../assets/sport1.jpg";
import Sport2 from "../assets/sport2.jpg";
import Sport3 from "../assets/sport3.jpg";
import ProductCard from "../components/ProductCard";


function Home() {
  return (
    <>
      <main className="conteudo">
        <section className="conteudo-central">
          <div className="midia">
            <img src={Sport2} alt="Ruisse" />
            <div id="texto-conteudo">
              <h1>(im)PERFEIÇÃO DE RUA</h1>
            </div>
          </div>
        </section>

        <section className="products">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </section>

        <section className="conteudo-secundario">
          <img src={Sport3} alt="Ruisse" />
        </section>
      </main>
    </>
  );
}

export default Home;
