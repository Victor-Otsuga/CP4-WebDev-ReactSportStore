import {} from "react";
import "../css/estilo.css"
import Sport1 from '../assets/sport1.jpg'
import Sport2 from '../assets/sport2.jpg'
import Sport3 from '../assets/sport3.jpg'
import Sport4 from '../assets/sport4.jpg'


function Home() {
  return (
    <>
      <main class="conteudo">
        <section class="conteudo-central">
          <div class="midia">
          <img src={Sport2} alt="Ruisse" />
            <div id="texto-conteudo">
              <h1>(im)PERFEIÇÃO DE RUA</h1>
              <p id="resumo-conteudo">
                Redefinindo a perfeição, celebrando as imperfeições como marca
                de autenticidade e humanidade.
              </p>
            </div>
          </div>
        </section>

        <section class="products">
        <a class="nostyle" href="./product-01card.html">
          <div class="product">
            <img src={Sport4} alt="Ruisse" />
            <h2>Cropped Moletinho</h2>
            <p>Cropped Moletinho e RIB, produzido em Poliéster.</p>
            <p class="price">R$ 829,41</p>
            <button>Comprar</button>
          </div>
        </a>
        <a class="nostyle" href="./product-02card.html">
          <div class="product">
            <img src={Sport4}  alt="Ruisse" />
            <h2>Vestido Moletinho</h2>
            <p>Vestido tecido de moletinho e RIB.</p>
            <p class="price">R$ 1.153,36</p>
            <button>Comprar</button>
          </div>
        </a>
        <a class="nostyle" href="./product-03card.html">
          <div class="product">
            <img src={Sport4}  alt="Ruisse" />
            <h2>Camisa Alongada</h2>
            <p>Camisa de algodão com modelagem reta.</p>
            <p class="price">R$ 610,76</p>
            <button>Comprar</button>
          </div>
        </a>
        <a class="nostyle" href="./product-04card.html">
          <div class="product">
            <img src={Sport4}  alt="Ruisse" />
            <h2>Top Cinto</h2>
            <p>Top de sarja leve com abertura frontal em zíper tratorado.</p>
            <p class="price">R$ 652,48</p>
            <button>Comprar</button>
          </div>
        </a>
      </section>

        <section class="conteudo-secundario">
        <img src={Sport3 } alt="Ruisse" />
        </section>

      </main>
    </>
  );
}

export default Home;
