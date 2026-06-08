'use client';
import { mostPopular } from '@/app/_data/data';
import './MostPopular.css';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/app/_store/cartStore';

export default function MostPopular() {
  const addToCart = useCartStore(state => state.addToCart);

  return (
    <section className='most-popular'>
      <div className='container'>
        <h2>most popular</h2>
        <div className='container-popular'>
          {mostPopular.map((item, index) => (
            <div className='card-popular' key={item.id}>
              <div className='image-container'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </div>
              <div className='image-popular-content'>
                <div>
                  <h3 className='name-price'>
                    {item.name}
                    <p className='product-price'>{`$${item.price}`}</p>
                  </h3>
                </div>

                <p className='popular-content-description'>{item.description}</p>

                <button onClick={() => addToCart(item)}>add to cart</button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className='view-more'>
          <Link href='/products'>
            View more products »»
          </Link>
        </div>
      </div>
    </section>
  );
}
