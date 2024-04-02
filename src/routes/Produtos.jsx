import {} from 'react';
import '../css/estilo.css';
import Produto from '../assets/produto.png'
import ProductCard from "../components/ProductCard";


function Produtos() {

  return (
    <>
      <h2 id="ProductsTitle" className='PageTitle'>Nossos Produtos</h2>
      <section className="products">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </section>
    </>
  );
}
export default Produtos;