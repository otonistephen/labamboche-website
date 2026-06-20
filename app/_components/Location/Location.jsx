'use client';
import { useEffect, useState, useRef } from 'react';
import DynamicMapLocation from '../DynamicMapLocation/DynamicMapLocation';
import { motion } from 'framer-motion';

export default function Location() {
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect(); // Stop watching once the map is injected
        }
      },
      { rootMargin: '200px' } // Pre-loads the map 200px before it hits the viewport screen
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <motion.div
        className='content-container'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: 'tween',
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
      >
        {/* Only boots up the map assets if the user has scrolled near this section */}
        {isInViewport ? (
          <DynamicMapLocation />
        ) : (
          <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>Loading locations map...</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}