import {} from 'react';
import '../css/estilo.css';
import Sport6 from "../assets/sport6.jpg";
function Sobre() {
  return (
    <>
      <h2 className='PageTitle'>Sobre a Evo Sports</h2>
      <section className="about">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, praesentium in! A soluta nam eius enim, ea facere earum unde adipisci officia. Voluptas consequatur dolorum debitis ipsa corrupti, assumenda nostrum!</p>
      <img src={Sport6} alt="AboutImg" />
      </section>
    </>
  );
}
export default Sobre;
