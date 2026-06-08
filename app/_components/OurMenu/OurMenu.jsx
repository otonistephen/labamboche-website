'use client';
import './OurMenu.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { listMenu } from '@/app/_data/data';
import { menuList } from '@/app/_data/data';
import { images } from '@/app/_data/data';

export default function OurMenu() {
  return (
    <section className='menu' id='menu'>
      <div className='container'>
        <div className='menu-container'>
          <div className='menu-content'>
            <h2 className='menu-title'>Explore our Menu</h2>
            <ul className='list-menu'>
              {menuList.map(list => (
                <li key={list.id}>
                  {/* <div className='image-wrapper'>
                    <Image
                      src={images.menu_notice}
                      width={12}
                      height={12}
                      alt='menu-icon'
                    />
                  </div> */}
                  
                  {list.name}
                </li>
              ))}
            </ul>
            <Link href='/products' className='btn'>
              order now
            </Link>
          </div>
          <div className='products'>
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={20}
              freeMode={true}
              slidesPerView='auto'
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1.4, spaceBetween: 16 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 24 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 2.5, spaceBetween: 26 },
                1280: { slidesPerView: 2.5, spaceBetween: 30 },
              }}
              className='product-carousel'
            >
              {listMenu.map(item => (
                <SwiperSlide key={item.id} className='product-card'>
                  <div className='product-card-container'>
                    <div className='product-card-wrapper'>
                      <div className='product-card-image'>
                        <Image
                          src={item.img}
                          alt={item.name}
                          // sizes='(max-width: 480px) 40vw, (max-width: 768px) 30vw, 192px'
                          sizes='(max-width: 640px) 55vw, (max-width: 1024px) 35vw, 320px'
                          fill
                          style={{ objectFit: 'cover' }}
                          quality={82}
                          loading='eager'
                        />
                      </div>
                      <p className='product-name'>{item.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
