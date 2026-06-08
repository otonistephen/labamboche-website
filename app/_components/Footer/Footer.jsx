import Image from 'next/image';
import './Footer.css';
import { images } from '@/app/_data/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className='footer-section'>
      <div className='container'>
        <div className='footer-container'>
          <ul className='address'>
            <h2>Address</h2>
            <li>
              <Image
                src={images.location}
                alt='location image'
                width={20}
                height={20}
                className='location-image'
              />
              <p>892 Queen St E, Toronto, ON M4M 1J3, Canada</p>
            </li>
            <li>
              <Image
                src={images.location}
                alt='location image'
                width={20}
                height={20}
                className='location-image'
              />
              <p>1712 Avenue Rd, North York, ON M5M 3Y6, Canada</p>
            </li>
          </ul>
          <ul className='contact'>
            <h2>Contact</h2>
            <li>
              <Image
                src={images.phone}
                alt='location image'
                width={20}
                height={20}
                className='location-image'
              />
              <p> +23 444 333333</p>
            </li>
            <li>
              <Image
                src={images.email}
                alt='location image'
                width={20}
                height={20}
                className='location-image'
              />{' '}
              <p> labamboche@gmail.com</p>
            </li>
          </ul>
          <ul className='opening-hours'>
            <h2>Opening Hours</h2>
            <li>
              <Image
                src={images.time}
                alt='location image'
                width={20}
                height={20}
                className='location-image'
              />
              <p> 7:30am - 4:00pm</p>
            </li>
            <li>
              <Image
                src={images.time}
                alt='location image'
                width={20}
                height={20}
                className='location-image'
              />{' '}
              <p> 5:30pm - 10:00pm (After Dark)</p>
            </li>
          </ul>
          <ul className='follow-us'>
            <h2>Follow Us</h2>
            <li>
              <Image
                src={images.instagram}
                alt='location image'
                width={20}
                height={20}
                className='location-image follow-image'
              />{' '}
            </li>
          </ul>
        </div>
      </div>
  
      <div className='copy-right'>
        <p>© {currentYear} La bamboche. All rights reserved.</p>
      </div>
    </section>
  );
}
