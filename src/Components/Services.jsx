import './Services.css'
import NavBar from "./NavBar";
import Footer from './Footer';
import trekking from '../icons/trekking.png'
import map from '../icons/map.png'
import earth from '../icons/earth.png'
import suitcases from '../icons/suitcases.png'
import island from '../icons/island.png'
import maldives from '../images/maldives.jpg'
import cottonbro from '../images/cottonbro.jpg'
import donald from '../images/donald.jpg'
import pool from '../images/pool.jpg'
import room from '../images/room.jpg'
import pixabay from '../images/pixabay.jpg'
import profile from '../images/profile.webp'
import background from '../images/background.webp'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Services = () => {
    return (  
<>


<div className='service-image'>
  <NavBar></NavBar>
  <div className="service-header ">
                <h1 className="text-light text-center pt-5">Our Services</h1>
                <p className="text-light text-center ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        
      </div>



      {/* services */}
      <div className='servicesMain'>
<div className="container services">
  <h4> OUR SERVICES</h4>

</div>
<section className="section-3">

<Splide  options={{
          type: 'loop', // The carousel will loop infinitely
          perPage: 3,   // Show 3 slides per page
          autoplay: true, // Automatically play the slides
          pauseOnHover: true, // Pause the autoplay on hover
          gap: '1rem',  // Add some gap between the slides
          breakpoints: {
            768: {
              perPage: 2, // On tablet, show 2 slides per page
            },
            480: {
              perPage: 1, // On mobile, show 1 slide per page
            }
          }
        }}>
      <SplideSlide>
        <div className="card container">
            <div className='card-content'>
            <div className="CardImg1">
                <img src={trekking} alt="" width="30%"/>
            </div>
            <div className="card-body">
            
          <h5>
            Trekking
          </h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="#" className="btn"> LEARN MORE</a>
          </div>
            </div>
            
            
        </div>
        </SplideSlide>
        <SplideSlide>
        <div className="card container">
            <div className='card-content'>
            <div className="CardImg1">
                <img src={map} alt="" width="30%"/>
            </div>
            <div className="card-body">
            
          <h5>
            Map
          </h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="#" className="btn"> LEARN MORE</a>
          
            </div>
            
            </div>
        </div>
        </SplideSlide>
        <SplideSlide>
        <div className="card container">
        <div className='card-content'>
            <div className="CardImg1">
                <img src={island} alt="" width="30%"/>
            </div>
            <div className="card-body">
            
          <h5>
            island hopping
          </h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="#" className="btn"> LEARN MORE</a>
          </div>
            </div>
            
            
        </div>
        </SplideSlide>
        <SplideSlide>
        <div className="card container">
        <div className='card-content'>
            <div className="CardImg1">
                <img src={suitcases} alt="" width="30%"/>
            </div>
            <div className="card-body">
            
          <h5>
            Suitcases
          </h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="#" className="btn"> LEARN MORE</a>
          
            </div>
            </div>
            
            
        </div>
        </SplideSlide>
        <SplideSlide>
        <div className="card container">
        <div className='card-content'>
            <div className="CardImg1">
                <img src={earth} alt="" width="30%"/>
            </div>
            <div className="card-body">
            
          <h5>
            World-Round
          </h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="#" className="btn"> LEARN MORE</a>
          
            </div>
            </div>
            
            
        </div>
        </SplideSlide>
    </Splide>
</section>
</div>
 {/* services end  */}


  {/* why us start */}
  <div className="why">
            <div className="why-img">
                <div className="img">
                    <img src={background} alt="" />
                </div>
            </div>
            <div className="why-content">
                    <h5>Why Us</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>   
        </div>
        {/* why us end */}

         {/* instagram starts */}

         <div className='instagram'>
          <div className='row container'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                <h4 class="test">Instagram</h4>
                </div>
                <div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
                <p class="test-p">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
                
                </div>
            </div>

            <section className="instagram-section">
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            autoplay: true,
            pauseOnHover: true,
          }}
        >
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={room} alt="" /></SplideSlide>
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={pool} alt="" /></SplideSlide>
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={pixabay} alt="" /></SplideSlide>
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={profile} alt="" /></SplideSlide>
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={maldives} alt="" /></SplideSlide>
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={donald} alt="" /></SplideSlide>
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={cottonbro} alt="" /></SplideSlide>
          <SplideSlide><img style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={pool} alt="" /></SplideSlide>
        </Splide>
      </section>

          </div>

          {/* instagram ends */}

          <div className=''>
            <Footer></Footer>

          </div>

</>
    );
}
 
export default Services;