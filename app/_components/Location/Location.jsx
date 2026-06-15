'use client'
import DynamicMapLocation from '../DynamicMapLocation/DynamicMapLocation';
import { motion } from 'framer-motion';

export default function Location() {
  return (
    <div>
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
        <DynamicMapLocation />
      </motion.div>
    </div>
  );
}
