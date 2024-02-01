import Carousel from 'react-bootstrap/Carousel';
import boat from './boat3.jpg';
import boat1 from './boat2.jpg';
import boat2 from './boat4 .jpg';
import { Button } from '@mui/material';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Booking from './Booking';
import { CarouselCaption } from 'react-bootstrap';
function Caru() {
  return (
    <div className='Caru'>

    <div className='caro'>
        <ReactPlayer
         className='react-player'
         url="https://youtu.be/asqMpSZNM4A?si=mDOz4_XVNsdRdg2J"
         width="100%"
         height="77.2vh"
        playing
         loop
         />
         </div>
         <div className='caro'>

    <Carousel data-bs-theme="dark">
      
      <Carousel.Item>
        <img
          className="boat"
          src={boat}
          width="100%"
          height="850px"
        />
        <Carousel.Caption>
           {/* <Button></Button> */}
        
           <div className='oo'>

        <Link to='/Card'> <Button class="btn btn-primary" >Start Booking</Button></Link>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="boat"
          src={boat1}
          width="100%"
          height="850px"
    
          />
        <Carousel.Caption>
        <div className='oo'>

        <Link to='/Card'> <Button class="btn btn-primary" >Start Booking</Button></Link>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className='oo'>

        <Link to='/Card'> <Button class="btn btn-primary" >Start Booking</Button></Link>
          </div>
 
        </Carousel.Caption>
        <img
          className="boat"
          src={boat2}
          width="100%"
          height="850px"
          />
      </Carousel.Item>
    </Carousel>
    </div>
          </div>
  );
}

export default Caru;
{/* <div className={`fundo ${isDark ? "Dark" : ""}`}>
<div className="ceu">
  {/* <img src=""></img> */}
//   <div className="solEmoon">

//     <div className="sol"></div>
// <div className="moon"></div>
// </div>
// </div>
// </div> */}