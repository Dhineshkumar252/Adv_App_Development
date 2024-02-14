import Carousel from 'react-bootstrap/Carousel';
import boat from '../assets/boat3.jpg';
import boat1 from '../assets/boat2.jpg';
import boat2 from '../assets/boat4 .jpg';
import { Button } from '@mui/material';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


import vid3 from '../assets/vid3.mp4'
function Caru() {
  return (
    <div className='Caru'>

    <div className='caro'>
        <ReactPlayer
         className='react-player'
         url="https://youtu.be/ollHO3F6T0g?si=P6ANPp15HZv9arjz"
        // url={[
          
        //   {src: 'vid1.mp4', type: 'video/mp4'},
        //   {src: 'vi2.mp4', type: 'video/mp4'}
        // ]}
         width="100%"
         height="78.1vh"
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
          height="860px"
        />
        <Carousel.Caption>
           {/* <Button></Button> */}
        
           <div className='oo'>

        <Link to='/Booking'> <Button class="btn btn-primary" >Start Booking</Button></Link>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="boat"
          src={boat1}
          width="100%"
          height="860px"
    
          />
        <Carousel.Caption>
        <div className='oo'>

        <Link to='/Booking'> <Button class="btn btn-primary" >Start Booking</Button></Link>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className='oo'>

        <Link to='/Booking'> <Button class="btn btn-primary" >Start Booking</Button></Link>
          </div>
 
        </Carousel.Caption>
        <img
          className="boat"
          src={boat2}
          width="100%"
          height="860px"
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