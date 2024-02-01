import React from 'react'
import {  Carousel } from 'react-bootstrap';
// import { Button } from '@mui/material';
import Button from 'react-bootstrap';
import vid1 from '../assets/vid1.mp4'
import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid3.mp4'
import boat from './boat3.jpg';
import boat1 from '../assets/wl.jpg';
import boat2 from './boat4 .jpg';
import './Toggle.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
// import { Button } from '@mui/material';
function First() {
  return (
    // <div className='a'>

    // <div className='ab'>

    //      <ReactPlayer
    //      className='react-player'
    //      url={vid2}
    //      width="87%"
    //      height="100vh"
    //      loop
    //      playing
    //      />
    // </div>
   
    // <button>Hi</button>
    // <Link to='/Registration'><a><Button class="btn btn-success">Admin</Button></a></Link>
    // <Link to='/Registation'><Button class='btnn btn-primary'>User</Button></Link>
    
    
    
  
    // <div className='ab'>

        //  <ReactPlayer
        //  className='react-player'
        //  url={vid3}
        //  width="313.4%"
        //  height="100vh"
        //  loop
        //  playing
        //  />
        // />
        //      </div>
        //      </div>
        <div>
    <div className='sl'>

    <Carousel data-bs-theme="dark">
      
      <Carousel.Item>
        <img
          className="boat"
          src={boat}
          width="100%"
          height="1100px"
        />
        
        <Carousel.Caption>
        <Link to='/Adminre'><Button variant='success'>Admin</Button></Link>
          <Link to='/Registration'><Button variant="primary">User</Button></Link>
          {/* <Link to='/Adminre'><Button class="bxn btn-success">Admin</Button></Link>
          <Link to='Registration'><Button class="bxn btn-danger">User</Button></Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="boat"
          src={boat1}
          width="100%"
          height="1100px"
          
          />
        <Carousel.Caption>
        <Link to='/Adminre'><Button variant='success'>Admin</Button></Link>
          <Link to='/Registration'><Button variant="primary">User</Button></Link>
        {/* <Link to='/Card'> <Button class="btn btn-primary" >Start Booking</Button></Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        <Link to='/Adminre'><Button variant='success'>Admin</Button></Link>
          <Link to='/Registration'><Button variant="primary">User</Button></Link>
        {/* <Link to='/Adminre'><Button class="bxn btn-success">Admin</Button></Link>
          <Link to='Registration'><Button class="bxn btn-danger">User</Button></Link> */}
        {/* <Link to='/Card'> <Button class="btn btn-primary" >Start Booking</Button></Link> */}
 
        </Carousel.Caption>
        <img
          className="boat"
          src={boat2}
          width="100%"
          height="1100px"
          />
      </Carousel.Item>
    </Carousel>
          </div>
          </div>
  )
}

export default First