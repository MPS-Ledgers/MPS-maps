import React from 'react'
import './styles/footer.css'
import { Link } from 'react-router-dom'
import {FaYoutube,FaFacebook,FaEnvelope,FaTwitter,FaCarCrash,FaPhoneAlt} from 'react-icons/fa'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {SiGooglemaps} from 'react-icons/si'
import {GiTrafficLightsOrange} from 'react-icons/gi'
const Footer=()=> {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>MPS Maps</Link>
            <Link to='/'>Command Control</Link>
            <Link to='/'>Accurate Mitigation</Link>
            <Link to='/'>Best Client Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'><FaPhoneAlt/>180-867-176</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Rights reserved</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'><SiGooglemaps/> Maps</Link>
            <Link to='/'><FaCarCrash/> Accidents</Link>
            <Link to='/'><TiWeatherPartlySunny/> Weather</Link>
            <Link to='/'><GiTrafficLightsOrange/> Traffic</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social</h2>
            <Link to='/'><FaEnvelope/> Mail</Link>
            <Link to='/'><FaTwitter/> Twitter</Link>
            <Link to='/'><FaFacebook/> Facebook</Link>
            <Link to='/'><FaYoutube/> Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>MPM Maps © 2021 | Terms of Service | Rights reserved</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer