'use client'
import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function FadeInSection({ children, initialY = 50 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div>
      <section ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : initialY }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </section>
    </div>
  );
}
