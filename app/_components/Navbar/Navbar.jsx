'use client';
import './Navbar.css';
import { useEffect, useState } from 'react';
import NavLinks from '../NavLInks/NavLinks';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { useCartStore } from '@/app/_store/cartStore';
import CartProfile from '../CartProfile/CartProfile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const totalItems = useCartStore(state => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${click ? 'active' : ''}`}>
      <div className='container'>
        <div className={`navbar ${click ? 'active' : ''}`}>
          <Logo closeMobileMenu={closeMobileMenu} />
          <div className='div-flex cart-hamburger'>
            <NavLinks click={click} closeMobileMenu={closeMobileMenu} />

           
          </div>
          <CartProfile click={click} closeMobileMenu={closeMobileMenu} />
           <div
              className={` hamburger ${click ? 'active' : ''}`}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
      </div>
    </nav>
  );
}
