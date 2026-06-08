'use client';
import './NavLinks.css';
import Link from 'next/link';
import { useCartStore } from '@/app/_store/cartStore';

export default function NavLinks({ click, closeMobileMenu }) {
  const totalItems = useCartStore(state => state.getTotalItems());
  return (
    <ul className={`menu-list ${click ? 'active' : ''}`}>
      <li>
        <Link href='/' onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link href='/about' onClick={closeMobileMenu}>
          About Us
        </Link>
      </li>

      <li>
        <Link href='/products' onClick={closeMobileMenu}>
          Products
        </Link>
      </li>
      <li>
        <Link href='/reservation' onClick={closeMobileMenu}>
          Reservation
        </Link>
      </li>

      {/* Cart Button */}
      <li>
        {/* <Link
          href='/cart'
          onClick={closeMobileMenu}
          className='cart-icon-link desktop-cart'
        >
          <span className='cart-icon'>🛒</span> 
          {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
        </Link> */}
      </li>
      {/* <li>
        <Link href='/signup' onClick={closeMobileMenu}>
          Sign Up
        </Link>
      </li> */}

      
    </ul>
  );
}
