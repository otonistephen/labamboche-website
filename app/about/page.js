import { artisanList } from '../_data/data';
import './about.css';
import Image from 'next/image';
import { images } from '../_data/data';

export default function About() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className='about-section'>
        <div className='container'>
          <div className='about-wrapper'>
            <div className='about-container'>
              <div className='about-header-content'>
                <h1>About Us</h1>
                <p>
                  La Bamboche Patisserie is a woman-owned, Japanese-French
                  inspired bakery located in North York. We focus on fresh
                  pastries handmade everyday, made with high quality
                  ingredients, from flours to final products. Our story began
                  with a passion for creating authentic French pastries and a
                  desire to bring a taste of Paris to our neighborhood.
                </p>
                <p>
                  we are committed to using only the highest quality ingredients
                  and traditional techniques to craft our pastries, ensuring
                  that every bite is a delightful experience. We invite you to
                  join us on this culinary journey and discover the magic of
                  French baking at La Bamboche.
                </p>
              </div>
              <div className='about-image-container'>
                <div className='about-image-wrapper'>
                  <Image
                    src={images.background_image}
                    alt='about us image'
                    width={400}
                    height={550}
                    className='about-image'
                  />
                </div>
                <div className='img-chef'>
                  <Image
                    src='/images/chef.png'
                    alt='chef image'
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='philosophy'>
          <div className='container'>
            <div className='philosophy-header'>
              <h4 className='sub-header'>The philosophy</h4>
              <h3>purity. precision. passion</h3>
              <p>
                We believe that a pastry is more than a dessert; it is a
                momentary escape. Our philosophy rests on three pillars that
                guide every fold of dough and every drop of ganache.
              </p>
            </div>

            <div className='core-values'>
              <div className='source'>
                <h5>source</h5>
                <p>
                  Exceptional flavor begins at the source. We partner with local
                  Ontario orchards for our fruits and import AOP butter from
                  Charentes- Poitou to ensure authentic French laminated
                  textures.
                </p>
              </div>
              <div className='technique'>
                <h5>technique</h5>
                <p>
                  Respect for tradition is non-negotiable. Our chefs utilize
                  classic French methods—some dating back centuries—while
                  embracing modern technology to achieve perfect consistency.
                </p>
              </div>
              <div className='aesthetic'>
                <h5>aesthetic</h5>
                <p>
                  We eat with our eyes first. Our design language is rooted in
                  minimalism, allowing the natural colors of ingredients and the
                  geometry of the pastry to speak for themselves.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='artisans'>
          <div className='container'>
            <div className='artisan-header'>
              <h4>meet the artisans</h4>
              <h3>The hands behind the craft</h3>
            </div>

            <div className='artisan-card-container'>
              {artisanList.map(list => (
                <div key={list.id} className='artisan-card-wrapper'>
                  <div className='artisan-image-wrapper'>
                    <div className='image-wrapper'>
                      <Image
                        src={list.image}
                        alt={`${list.image} image`}
                        width={280}
                        height={373}
                        loading='eager'
                      />
                    </div>
                    <div className='artisan-content'>
                      <p>{list.name}</p>
                      <p>{list.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='quote'>
              <div className='quote-container'>
                <q>
                  To create something truly beautiful, one you first respect
                  the silence between the flavors 
                </q>
                <p>- Julien mercier</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
