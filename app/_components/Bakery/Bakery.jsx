'use client';

import { useRef, useEffect } from 'react';
import './Bakery.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Bakery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the section reaches the middle of the viewport
          section.classList.add('overlay-active');
        } else {
          section.classList.remove('overlay-active');
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -30% 0px'
      }
     
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const isMobile = window.innerWidth < 768;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add('overlay-active');
      } else {
        section.classList.remove('overlay-active');
      }
    },
    {
      threshold: 0.5,
      rootMargin: isMobile ? '0px' : '-20% 0px -30% 0px'
    }
  );

  observer.observe(section);
  return () => observer.disconnect();
}, []);

  return (
    <section ref={sectionRef} className='bakery-section'>
      <div className='container'>
        <div className='bakery-container'>
          <div className='bakery-content'>
            <p>B2B partnership</p>
            <h2 className='bakery-title'>Wholesale Bakery Delivery</h2>
            <p>
              We provide a catalog of wholesale products which include:
              croissants, macarons, cookies, butter tarts, scones, and quiches.
              We deliver early in the morning to bakeries and cafés in the area.
              We offer frozen goods for baking in the store, or we have them
              ready to serve.
            </p>
            <Link href='/contact' className='bakery-btn'>
              order now
            </Link>
          </div>
          <div className='bakery-image'>
            <Image
              src='/images/delivery.png'
              alt='delivery'
              width={400}
              height={400}
              className='bakery-img'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
