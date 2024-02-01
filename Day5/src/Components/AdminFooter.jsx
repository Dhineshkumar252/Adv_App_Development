import { useEffect } from 'react';
import './Footer.css';
import logo from './logo.png';
import insta from './insta.webp';
import fb from './fb.png';
import x from './x.png';
import wt from './wt.webp';
import th from './th.webp';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
const AdminFooter = () => {
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
          <h3>Motto</h3>
          <p>"Navigate Your Dreams"</p>
          <h3>Vision</h3>
          <p>Our vision is to be the leading global platform for boathouse rentals, recognized for our commitment to excellence, unparalleled selection, and customer-centric approach</p>
          
        </div>
        <div className="footer-section links">
          <h1>Quick Links</h1>
          <ul>
          <Link to='/AdminH'><li><a href="">DashBoard</a></li></Link>
          <Link to='/Adminget'><li><a href="">View Boats</a></li></Link>
          <Link to='/Admina'><li><a href="">Add Boats</a></li></Link>
          <Link to='/AdminBook'><li><a href="">BookedBoats</a></li></Link>
          </ul>
         
        </div>
        <div className='images'>
        
         <div className="aboutlo">
          <img src={insta} alt="Your Logo" />
        <img src={fb} alt="Your Logo" />
        <img src={x} alt="Your Logo" />
        <img src={th} alt="Your Logo" />
        <img src={wt} alt="Your Logo" />
        </div>
        {/* <div className="aboutlogo">
        </div>
        <div className="aboutlogo">
        </div> */} 
        </div>
      
      </div>
      
    </footer>
  );
}

export default AdminFooter;
