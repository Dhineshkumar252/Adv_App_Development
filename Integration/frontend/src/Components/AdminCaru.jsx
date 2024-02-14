import Carousel from 'react-bootstrap/Carousel';
import boat from '../assets/boat3.jpg';
import boat1 from '../assets/boat2.jpg';
import boat2 from '../assets/boat4 .jpg';
import ReactPlayer from 'react-player';
function AdminCaru() {
  return (
    <div className='Caru'>

    <div className='caro'>
        <ReactPlayer
         className='react-player'
         url="https://youtu.be/ollHO3F6T0g?si=P6ANPp15HZv9arjz"
         width="100%"
         height="76.7vh"
         playing
         loop
         />
         </div>
         <div className='caro'>

    <Carousel data-bs-theme="dark">
      a
      <Carousel.Item>
        <img
          className="boat"
          src={boat}
          width="100%"
          height="760px"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="boat"
          src={boat1}
          width="100%"
          height="760px"
    
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="boat"
          src={boat2}
          width="100%"
          height="760px"
          />
      </Carousel.Item>
    </Carousel>
    </div>
          </div>
  );
}

export default AdminCaru;
