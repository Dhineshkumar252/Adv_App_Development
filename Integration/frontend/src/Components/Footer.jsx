import { useEffect } from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import insta from '../assets/insta.webp';
import fb from '../assets/fb.png';
import x from '../assets/x.png';
import wt from '../assets/wt.webp';
import th from '../assets/th.webp';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  useEffect(() => {
    const bubblesContainer = document.querySelector('.bubbles');

    // Create bubbles
    for (let i = 0; i < 128; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
      bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
      bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
      bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
      bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
      bubblesContainer.appendChild(bubble);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="bubbles"></div>
      <div className="footer-content">
        <div className="about-logo">
          <img src={logo} alt="Your Logo" />
        </div>
        <div className="footer-section about">
          <h1>About Us</h1>
          <p>At BoatHousing, we're passionate about connecting you with the perfect boathouse getaway, whether you're seeking a serene retreat on tranquil waters or an adventurous voyage exploring breathtaking coastlines.</p>
        </div>
        <div className="footer-section links">
          <h1>Quick Links</h1>
          <ul>
            <Link to='/Navbar'><li><a href="">Home</a></li></Link>
          <Link to='/MM'><li><a href="">Booking</a></li></Link>
          <Link to='/About'><li><a href="">About Us</a></li></Link>
          </ul>
         
        </div>
        <div className='images'>
        
         <div className="aboutlo">
         <a href='https://www.instagram.com/accounts/login/?hl=en'> <img src={insta} alt="Your Logo" /></a>
         <a href='https://www.facebook.com/'> <img src={fb} alt="Your Logo" /></a>
         <a href='https://twitter.com/i/flow/login'> <img src={x} alt="Your Logo" /></a>
         <a href='https://www.threads.net/login'> <img src={th} alt="Your Logo" /></a>
         <a href='https://web.whatsapp.com/'> <img src={wt} alt="Your Logo" /></a>
        
     
        </div>
        {/* <div className="aboutlogo">
        </div>
        <div className="aboutlogo">
        </div> */} 
        </div>
        <div className="footer-section contact-form">
          <h1>Contact Us</h1>
          <form action="{{ route('contact.store') }}" method="POST">
          <div className='text'>

          <TextField label="" placeholder="EMAIL" className="contact-input" color="secondary" focused />
          </div >
          <div className='tbnn'>

            <Button variant="success">
                Send
            </Button>
          </div>
        
          </form>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
