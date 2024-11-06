import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';



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




const Contact = () => {
    return ( 
<>
<div className='contact-image'>
  <NavBar></NavBar>
  <div className="contactHeader">
                <h1 className=" ">Contact Us</h1>
                <p className="">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        
      </div>
      {/* form start */}

<div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Name" required/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
            <div className='d-flex'>
                <div className='contact-address'>
          <h5>Address</h5>
          <p>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
          <div className='contact-phone'>
          <h5>Phone</h5>
          <p>+1 939 3839 399<br/>+1 492 5991 203</p>
          </div>
          </div>
          <div className='d-flex '>
            <div className='contact-mail'>
          <h5>Email</h5>
          <p>info@mydomain.com</p>
          </div>
          <div className='contact-socials'>
          <h5>Follow</h5>
          
          <div className="d-flex">
  <a href="#" className="me-3">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
  </a>
  <a href="#" className="me-3">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
  </a>
  <a href="#" className="me-3">
    <FontAwesomeIcon icon={faFacebook} size="2x" />
  </a>
  <a href="#" className="me-3">
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
  </a>
</div>
</div>
</div>

        </div>
      </div>
    </div>
{/* form end */}


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
 
export default Contact;