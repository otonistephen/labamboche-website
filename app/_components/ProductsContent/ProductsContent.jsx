'use client';
import { useState } from 'react';
import { categoriesList, productsList } from '@/app/_data/data';
import Image from 'next/image';
import './ProductsContent.css';
import { useCartStore } from '@/app/_store/cartStore';

export default function ProductsContent() {
  const [click, setClick] = useState('All');
  const addToCart = useCartStore(state => state.addToCart);
  const siteUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://labamboche.vercel.app';
  const productCountByCategory = productsList.reduce((acc, product) => {
    const cat = product.category.trim();
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  const totalProducts = productsList.length;
  return (
    <div className='products-content'>
      <div className='products-container'>
        <div className='products-menu'>
          <h3>collections</h3>
          {categoriesList.map(item => {
            const count =
              item.name == 'All'
                ? totalProducts
                : productCountByCategory[item.name] || 0;
            return (
              <li
                key={item.id}
                className={click === item.name ? 'active' : item.name}
                onClick={() =>
                  setClick(prev => (prev === item.name ? 'All' : item.name))
                }
              >
                {' '}
                <div className='name-count'>
                  <p>{item.name}</p>
                  <p> ({count})</p>
                </div>
              </li>
            );
          })}

          <div className='custom-order'>
            <h5>custom order</h5>
            <p>Need something unique for an event ?</p>
            <a href='#'>enquire now</a>
          </div>
        </div>
        <div className='products-content-wrapper'>
          <h3 className='products-content-header'>products</h3>
          <div className='products-content-container'>
            {productsList.map(list => {
              if (click === 'All' || click === list.category) {
                return (
                  <div key={list.id} className='category-card'>
                    <div className='category-card-image'>
                      <Image
                        src={list.image}
                        alt={list.name}
                        width={150}
                        height={200}
                      />
                    </div>
                    <div className='category-content'>
                      <h3>{list.name}</h3>
                      <p>{list.description}</p>
                      <p>{`$ ${list.price}`}</p>
                      <button
                        className='add-to-cart-btn'
                        onClick={() => addToCart(list)}
                      >
                        {' '}
                        add to cart
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
