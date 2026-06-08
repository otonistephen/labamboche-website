import AfterDark from './_components/AfterDark/AfterDark';
import Bakery from './_components/Bakery/Bakery';
import Blog from './_components/Blog/Blog';
import Hero from './_components/Hero/Hero';
import Location from './_components/Location/Location';
import MostPopular from './_components/MostPopular/MostPopular';
import OurMenu from './_components/OurMenu/OurMenu';
import OurRestaurant from './_components/OurRestaurant/OurRestaurant';
import Restaurant from './_components/Restaurant/Restaurant';

export default function Home() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div>
        <Hero />
        <OurMenu/>
        <Bakery/>
        <MostPopular/>
        {/* <Restaurant/> */}
        <OurRestaurant/>
        <AfterDark/>
        <Blog/>
      <Location/>
      </div>
    </main>
  );
}
