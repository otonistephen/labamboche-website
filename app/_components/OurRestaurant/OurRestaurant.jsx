'use client';
import './OurRestaurant.css';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { images } from '@/app/_data/data';
import Link from 'next/link';

export default function OurRestaurant() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the section reaches the middle of the viewport
          section.classList.add('bg-active');
        } else {
          section.classList.remove('bg-active');
        }
      },
      {
        threshold: 0.7,
        rootMargin: '-20% 0px -30% 0px',
      },
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
          section.classList.add('bg-active');
        } else {
          section.classList.remove('bg-active');
        }
      },
      {
        threshold: 0.5,
        rootMargin: isMobile ? '0px' : '-20% 0px -30% 0px',
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='our-restaurant'>
      <div className='container'>
        <div className='our-restaurant-wrapper'>
          

          <div className='our-restaurant-content'>
            <div className='restaurant-image-wrapper'>
              <Image
                src={images.restaurant_image}
                alt='restaurant image'
                width={1300}
                height={500}
              />
            </div>
            <div className='restaurant-content'>
              <h3>Lumière</h3>
              <p>
                Enjoy a comfortable environment for hanging out with friends and
                family, enjoying a business conversation, with good coffee and
                amazing pastry and lunch options. We also offer gluten-free and
                vegan cookies.
              </p>
            </div>
          </div>
          <h2>Our Restaurant</h2>
        </div>
      </div>
    </section>
  );
}
