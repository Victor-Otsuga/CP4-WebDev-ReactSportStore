import {} from "react";
import "../css/estilo.css"
import BrandVideo from '../assets/midia/fashion.mp4'
import CampTwo from '../assets/midia/campanha2.png'

function Home() {
  return (
    <>
      <main class="conteudo">
        <section class="conteudo-central">
          <div class="midia">
            <video
              width="25%"
              height=""
              autoplay
              muted
              loop
              src={BrandVideo}
              type="video/mp4"
            ></video>
            <div id="texto-conteudo">
              <h1>(im)PERFEIÇÃO DE RUA</h1>
              <p id="resumo-conteudo">
                Redefinindo a perfeição, celebrando as imperfeições como marca
                de autenticidade e humanidade.
              </p>
            </div>
          </div>
        </section>


        <section class="conteudo-secundario">
          <img src={CampTwo} alt="Ruisse" />
        </section>

      </main>
    </>
  );
}

export default Home;
