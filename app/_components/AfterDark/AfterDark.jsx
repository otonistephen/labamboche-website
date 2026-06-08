'use client';
import './AfterDark.css';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { images } from '@/app/_data/data';
import Link from 'next/link';

export default function AfterDark() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('bg-dark-active');
          document.body.classList.add('dark-section-active');
        } else {
          section.classList.remove('bg-dark-active');
          document.body.classList.remove('dark-section-active');
        }
      },
      {
        // threshold: 0.4,
        // rootMargin: isMobile ? '0px' : '-100px 0px -40% 0px',
        threshold: 0.3,
        rootMargin: isMobile ? '-30% 0px -30% 0px' : '-100px 0px -40% 0px',
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className='after-dark'>
      <div className='container'>
        <div className='after-wrapper'>
          <div className='after-dark-content'>
            <div className='after-dark-header'>
              <h5 className='sub-heading'>Exquisite evenings</h5>
              <h3>After Dark</h3>
            </div>
            <p>
              {' '}
              Experience the enchanting ambiance of La Bamboche After Dark,
              where the lights dim and the night begins to sparkle. Our evening
              setting offers a perfect blend of cozy intimacy and lively energy,
              making it an ideal spot for romantic dates, social gatherings, or
              simply unwinding after a long day.
            </p>
            <Link href='/'>Book a table</Link>
          </div>
          <div className='dark-image-wrapper'>
            <div className='after-dark-image'>
              <Image
                src={images.restaurant}
                alt='after dark restaurant'
                width={550}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
