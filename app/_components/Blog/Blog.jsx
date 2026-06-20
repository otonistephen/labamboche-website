'use client';
import { blogList } from '@/app/_data/data';
import './Blog.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section className='blog-section'>
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
        <div className='container'>
          <h2 className='blog-title'>La Bamboche Blog and News</h2>
          <p className='blog-subtitle'>
            Stay updated with our latest creations, seasonal specials, events,
            and behind-the-scenes stories from both our Leslieville and North
            York locations.
          </p>

          <div className='blog-content-container'>
            {blogList.map(list => (
              <div key={list.id} className='blog-card'>
                <div className='blog-image-wrapper'>
                  <Image
                    src={list.image}
                    alt={list.title}
                    width={400}
                    height={200}
                 
                    className='blog-content-image'
                  />
                </div>
                <div className='blog-content'>
                  <div className='blog-content-wrapper'>
                    <div className='date-wrapper-header'>
                      <p className='sub-title'>{list.sub_title}</p>
                      <p className='date-span'>
                        <span>
                          <i className='bx bx-calendar-alt'></i>
                        </span>
                        {list.date}
                      </p>
                    </div>
                    <h3>{list.title}</h3>
                    <p className='content-post'>{list.post}</p>
                  </div>
                  <button className='read-more-btn'>
                    read more<i className='bx  bx-chevrons-right'></i>{' '}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
