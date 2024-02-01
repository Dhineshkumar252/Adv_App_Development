import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './booking.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Nav from './Nav';
import './Navbar.scss';

class Booking extends React.Component {
  render() {
    return (
      <Booking1 />
    );
  }
}

class Booking1 extends React.Component {
  render() {
    return (
      <div className='no'>
         <Nav/>
        <div> 
      
        </div>
      <div className="ap-bg">

        <div className="ap-fc">
          <form className="ap-f" action="#" method="POST">
            <fieldset>
              <h1>Application Form</h1>
              <div className="ap-fn">
                <input type="text" name="Name" className="ap-fn" placeholder="Name" required />
              </div>
              <div className="ap-oi">
                <input type="date" name="dob" className="ap-dob" placeholder="Date of Birth" required />
                <select name="gender" className="ap-gender" defaultValue="" required>
                  <option value="" disabled hidden>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input type="text" name="address" className="ap-ad" placeholder="Address" required />
                <input type="tel" name="phone" className="ap-ph" placeholder="Telephone Number" required />
                <input type="email" name="email" className="ap-em" placeholder="Email Address" required />
                <input type="text" name="aadhar" className="ap-aadhar" placeholder="Aadhar Number" required />
              </div>
              <br /><br />
              <Link to="/Payment">
                <Button className="ap-su">Book & Pay</Button>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
        <Footer/>
      </div>
    );
  }
}

export default Booking;
