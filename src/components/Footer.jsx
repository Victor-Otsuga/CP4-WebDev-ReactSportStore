import {} from 'react';
import FooterLogo from '../assets/evo.png'
import '../css/estilo.css';

function Footer() {

  return (
    <>
      <footer>
      <p>Copyright © 2024 Ruisse. Todos os direitos reservados.</p>
      <p>Powered by <a href="#">Evo</a></p>
      <img src={FooterLogo} alt="" />
    </footer>
    </>
  );
}
export default Footer;
