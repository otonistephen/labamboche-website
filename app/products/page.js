import ProductsContent from '../_components/ProductsContent/ProductsContent';
import ProductsHero from '../_components/ProductsHero/ProductsHero';
import './products.css';

export default function Products() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className='product-section'>
        <div className='container'>
          <ProductsHero />
          <ProductsContent/>
        </div>
      </section>
    </main>
  );
}
