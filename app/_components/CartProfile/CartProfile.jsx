import './CartProfile.css';
import { images } from '@/app/_data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/app/_store/cartStore';

export default function CartProfile() {
    const totalItems = useCartStore(state => state.getTotalItems());
  return (
    <div className='cart-profile'>
      <ul className='cart-profile-menu'>
        <li>
          <Link href='/cart' className='cart-link'>
            <Image
              src={images.cart}
              alt='cart icon'
              width={20}
              height={20}
              className='cart-icon'
            />
            {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
          </Link>
        </li>
        <li>
          <Link href='/profile' className='profile-link'>
            <Image
              src={images.profile}
              alt='profile icon'
              width={20}
              height={20}
              className='profile-icon'
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
