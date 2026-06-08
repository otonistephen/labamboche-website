import './HeroImage.css'
import { images } from '@/app/_data/data'
import Image from 'next/image'

export default function HeroImage (){
  return(
    <div className="hero-image">
      <div className="hero-image-wrapper">
        <Image
        src={images.cake_rose}
        alt='rose cake image'
        width={576}
        // height={321.75}
          height={400}
        />
      </div>
    </div>
  )
}