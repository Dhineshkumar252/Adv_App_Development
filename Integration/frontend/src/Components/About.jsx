// import React from 'react';
import './About.css';
import Nav from './Nav';
// import Footer from './Footer';
import ReactPlayer from 'react-player';
const AboutUs = () => {
  return (
    <div>
    <Nav/>
    <div className="about-us">
        <div className='imgabout'>

      <ReactPlayer
         className='react-player'
         url="https://youtu.be/asqMpSZNM4A?si=mDOz4_XVNsdRdg2J"
         width="55%"
         height="52.2vh"
         controls
         loop
         />
         </div>
     
      <h3>
      Welcome to our Boathouse Booking Portal, your premier destination for unforgettable aquatic adventures! At Boathouse Booking Portal, we're passionate about connecting water enthusiasts with the perfect boathouse rentals for their dream vacations.
      </h3>
      <h3>
      Extensive Selection: We curate a diverse collection of boathouse rentals, ensuring there's something for every taste and preference.

User-Friendly Platform: Our intuitive online platform makes it effortless to browse, book, and manage your boathouse reservations from anywhere, at any time.

Quality Assurance: We uphold rigorous standards to ensure that each boathouse listed on our platform meets our criteria for safety, cleanliness, and comfort.

Customer Support: Our dedicated customer support team is here to assist you every step of the way, from initial inquiries to post-booking assistance, ensuring a smooth and stress-free experience.
      Our mission is simple: to provide seamless access to the most exquisite boathouse rentals across the globe. Whether you're seeking a tranquil retreat on a serene lake or an exciting coastal escape, we strive to make your boating experience exceptional, convenient, and memorable.
      </h3>
     
      <h3>
      Thank you for choosing Boathouse Booking Portal. Let us help you make waves and create memories that will last a lifetime!
      </h3>
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default AboutUs;