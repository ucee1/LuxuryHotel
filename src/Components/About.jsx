import './About.css'

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
import headshot from '../images/headshot.jpg'
import eye from '../images/eye.jpg'
import pixabay from '../images/pixabay.jpg'
import uche from '../images/uche.jpg'
import wedding from '../images/wedding.jpg'
import profile from '../images/profile.webp'
import background from '../images/background.webp'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const About = () => {
    return (  
        <>

<div className='about-image'>
  <NavBar></NavBar>
  <div className="aboutHeader">
                <h1 className=" ">About</h1>
                <p className="">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        
      </div>

       {/* history start */}
       <div className="history">
            <div className="history-img">
                <div className="img">
                    <img src={background} alt="" />
                </div>
            </div>
            <div className="history-content">
                    <h5>ABOUT Hotel_luxyury</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>   
        </div>
        {/* history end */}

        {/* who start */}

<div className='who-wrapper'>
    <div className='who'>
    <div className='container'>
    <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                <h4 class="who-header">Who We Are</h4>
                </div>
                <div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
                <p class="who-p">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
                
                </div>
            </div>

    </div>
    <div className='who-card'>
        <Splide
      options={{
        perPage: 3,
        breakpoints: {
          1200: { perPage: 2 },
          768: { perPage: 1 },
        },
        rewind: true,
        gap: '2rem',
      }}
    >
      
        <SplideSlide>
          <div className="card text-center">
            <img src={uche} alt="" className="card-img-top rounded-circle" style={{ width: '150px', margin: 'auto' }} />
            <div className="card-body">
              <h5 className="who-title">Uzoma Prince Uche</h5>
              <p className="who-text">CEO,FOUNDER.</p>
              <p className='who-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem distinctio quos atque vitae, a placeat rerum porro dicta nulla esse, nostrum deserunt ex quod repellendus ut ea mollitia obcaecati.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card text-center">
            <img src={headshot} alt="" className="card-img-top rounded-circle" style={{ width: '150px', margin: 'auto' }} />
            <div className="card-body">
              <h5 className="who-title">Uzoma Prince Uche</h5>
              <p className="who-text">CEO,FOUNDER.</p>
              <p className='who-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem distinctio quos atque vitae, a placeat rerum porro dicta nulla esse, nostrum deserunt ex quod repellendus ut ea mollitia obcaecati.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card text-center">
            <img src={uche} alt="" className="card-img-top rounded-circle" style={{ width: '150px', margin: 'auto' }} />
            <div className="card-body">
              <h5 className="who-title">Uzoma Prince Uche</h5>
              <p className="who-text">CEO,FOUNDER.</p>
              <p className='who-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem distinctio quos atque vitae, a placeat rerum porro dicta nulla esse, nostrum deserunt ex quod repellendus ut ea mollitia obcaecati.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card text-center">
            <img src={eye} alt="" className="card-img-top rounded-circle" style={{ width: '150px', margin: 'auto' }} />
            <div className="card-body">
              <h5 className="who-title">Uzoma Prince Uche</h5>
              <p className="who-text">CEO,FOUNDER.</p>
              <p className='who-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem distinctio quos atque vitae, a placeat rerum porro dicta nulla esse, nostrum deserunt ex quod repellendus ut ea mollitia obcaecati.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card text-center">
            <img src={wedding} alt="" className="card-img-top rounded-circle" style={{ width: '150px', margin: 'auto' }} />
            <div className="card-body">
              <h5 className="who-title">Uzoma Prince Uche</h5>
              <p className="who-text">CEO,FOUNDER.</p>
              <p className='who-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem distinctio quos atque vitae, a placeat rerum porro dicta nulla esse, nostrum deserunt ex quod repellendus ut ea mollitia obcaecati.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="card text-center">
            <img src={headshot} alt="" className="card-img-top rounded-circle" style={{ width: '150px', margin: 'auto' }} />
            <div className="card-body">
              <h5 className="who-title">Uzoma Prince Uche</h5>
              <p className="who-text">CEO,FOUNDER.</p>
              <p className='who-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem distinctio quos atque vitae, a placeat rerum porro dicta nulla esse, nostrum deserunt ex quod repellendus ut ea mollitia obcaecati.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </SplideSlide>
    
    </Splide>
    </div>
    </div>
    </div>
    {/* who end */}

    {/* instagram starts */}

    <div className='who-instagram'>
          <div className='row container'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                <h4 class="instagram-test">Instagram</h4>
                </div>
                <div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
                <p class="instagram-text-p">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
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
 
export default About;