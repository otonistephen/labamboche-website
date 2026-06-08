import HeroImage from '../HeroImage/HeroImage';
import HeroText from '../HeroText/HeroText';
import './Hero.css';
import Image from 'next/image';
import { images } from '@/app/_data/data';
export default function Hero() {
  return (
    <section className='hero'>
      <div className='image-wrapper'>
        <Image
          src={images.bakery_3}
          alt='Hero Image'
          fill
          sizes='100vw'
          priority
          style={{ objectFit: 'cover' }}
          className='hero-image'
        />
      </div>

      <div className='container'>
        <div className='hero-container'>
          <HeroText />
          {/* <HeroImage /> */}
        </div>
      </div>
    </section>
  );
}
