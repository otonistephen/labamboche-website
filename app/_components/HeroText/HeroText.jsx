import './HeroText.css';
import Link from 'next/link';

export default function HeroText() {
  return (
    <div className='hero-text'>
      <div className="hero-overlay"></div>
      <div className='containers'>
        <div className='hero-content'>
          <p className='hero-p'>Handcrafted with care</p>
          <h1>
             French Bakery at <br /> La bamboche
          </h1>
          <div className='hero-text-description'>
            <p>
              Blending French elegance with Japanese precision. 
            </p>
          </div>

          <Link href='/cart'>Explore Our Products</Link>
        </div>
      </div>
    </div>
  );
}
