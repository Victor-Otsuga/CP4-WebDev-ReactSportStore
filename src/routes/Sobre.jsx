import {} from 'react';
import '../css/estilo.css';
import Sport6 from "../assets/sport6.jpg";
function Sobre() {
  return (
    <>
      <h2 className='PageTitle'>Sobre a Evo Sports</h2>
      <section className="about">
      <p>A Evo Sports transcende a prática esportiva, promovendo a sustentabilidade. Oferecemos equipamentos e acessórios ecológicos de alta performance, com o compromisso de minimizar o impacto ambiental por meio de embalagens biodegradáveis e logística sustentável.</p>
      <img src={Sport6} alt="AboutImg" />
      </section>
    </>
  );
}
export default Sobre;
