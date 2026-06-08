import './ReservationImages.css';
import Image from 'next/image';
import { images } from '@/app/_data/data';

export default function ReservationImage() {
  return (
    <div className='reservatiion-image-container'>
      <div className='image-overlay-container'>
        <div className='image-wrapper'>
          <Image
            src={images.reservation_image}
            width={478}
            height={598}
            alt='reservation_image'
          />
        </div>
        <div className='reservation-image-overlay'>
          <h3>the la bamboche experience</h3>
          <p>
            A curated sensory journey through fine Canadian ingredients and
            French technique
          </p>
        </div>
      </div>
      <div className='policy-container'>
        <div className='info'>
          <div className='icon-wrapper'>
            <Image
              src={images.timing_policy}
              alt='timing policy image'
              width={20}
              height={20}
            />
          </div>
          <div>
            <h4>Timing policy</h4>
            <p>
              Reservations are held for 15 minutes. High tea seatings are
              scheduled for 90 minutes.
            </p>
          </div>
        </div>
        <div className='info'>
          <div className='icon-wrapper'>
            <Image
              src={images.menu_notice}
              alt='menu notice image'
              width={20}
              height={20}
            />
          </div>
          <div>
            <h4>Menu Notice</h4>
            <p>
              Our seasonal tasting menu is available for dinner seatings. Please
              notify us of allergies 24 hours in advance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
