import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          logistic partiner
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email(Not yet)'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'></Link>
            <Link to='/'>elogisticspro</Link>
            <Link to='/'>0771043506</Link>
            <Link to='/'>epro@gmail.com</Link>
            <Link to='/'>facebook</Link>
            <Link to='/'>whatsapp</Link>
           {/* <Link to='/'>Linkedin</Link>*/}
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>0775514454</Link>
            <Link to='/'>0771043506</Link>
            <Link to='/'>0784690901</Link>
             <Link to='/'>0712160805</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>IT team</h2>
            <Link to='/'>Primrose</Link>
            <Link to='/'>Yolanda</Link>
            <Link to='/'>Hope</Link>
            <Link to='/'>Chigovera</Link>
            <Link to='/'>Wiliams</Link>
</div>

<div class='footer-link-items'>
            <h2>Media</h2>
            <Link to='/'>Instagram...?</Link>
            <Link to='/'>Facebook...?</Link>
            <Link to='/'>Youtube......?</Link>
            <Link to='/'>Linkedin.....?</Link>
            <Link to='/'>Twitter........?</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            ONLINELOGISTICSPRO
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>epro@gmail.com</small>
          <br/><n/>
          <small class='website-rights'>...powered by xylem softwares</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
