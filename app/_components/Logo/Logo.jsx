import './Logo.css';
import { images } from '@/app/_data/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className='logo'>
      <Link href='/'>
        <div className='logo-wrapper'>
          <div className='image'>
            <Image
              src={images.logo}
              alt='logo image'
              width={60}
              height={60}
              loading='eager'
              className='logo-image'
            />
          </div>
          <div className='logo-text'>La bamboche</div>
        </div>
      </Link>
    </div>
  );
}
