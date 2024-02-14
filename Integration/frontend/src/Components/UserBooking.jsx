import { Component } from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import { Button, TextField } from '@mui/material';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.boat.id,
      boatName: props.boat.boatName,
      checkInDate: '',
      checkOutDate: '',
      phone: '',
      address: '',
      email: '',
      gender: '',
      price: props.boat.price,
      successMessage: '',
    };
  }

  handlePurchaseIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleBoatNameChange = (event) => {
    this.setState({ boatName: event.target.value });
  };

  handleCheckInDateChange = (event) => {
    this.setState({ checkInDate: event.target.value });
  };

  handleCheckOutDateChange = (event) => {
    this.setState({ checkOutDate: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      boatName: this.state.boatName,
      checkInDate: this.state.checkInDate,
      checkOutDate: this.state.checkOutDate,
      phone: this.state.phone,
      address: this.state.address,
      email: this.state.email,
      gender: this.state.gender,
      price: this.state.price,
    };

    axios
      .post('http://127.0.0.1:8700/AddBooking', data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ successMessage: 'Boat Added Successfully' });
          window.location.href='/Userget'
        }
      })
      .catch((error) => {
        console.error('Error adding boat:', error);
      });
  };

  render() {
    return (
        <div className='App'> 
        {this.state.successMessage && <p>{this.state.successMessage}</p>}

<div className='no'>
   {/* <Nav/> */}
  {/* <div> 

  </div> */}
<div className="ap-bg">

  <div className="ap-fc">
    <form className="ap-f" action="#" method="POST" onSubmit={this.handleSubmit}>
      <fieldset>
        <div className='ap-fn'>

          <TextField fullWidth sx={{ m: 1 }} 
          id="outlined-basic" label="BoatName" variant="outlined"
            color="secondary" focused
            className='ap-em'
            type="text"
            value={this.state.boatName}
            onChange={this.handleBoatNameChange}
            />
            </div>
            <br/>
      <div className='ap-oi'>
      <TextField  
          id="Boat ID" label="BoatName" variant="outlined"
            color="secondary" focused
            className='ap-em'
            type="text"
            value={this.state.id}
            onChange={this.handlePurchaseIdChange}
          />

<br/>
          <label className="sign-label">Check-In Date</label>
          <input
            className='ap-dob'
            type="date"
            value={this.state.checkInDate}
            placeholder='Check In Date'
            onChange={this.handleCheckInDateChange}
          />

          <label className="sign-label">Check-Out Date</label>
          <input
            className='ap-dob'
            type="date"
            value={this.state.checkOutDate}
            onChange={this.handleCheckOutDateChange}
          /><br/><br/>
<TextField 
          id="Phone" label="Phone" variant="outlined"
            color="secondary" focused
            className='ap-em'
            type="text"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          /><br/>
          <TextField 
          id="Address" label="Address" variant="outlined"
            color="secondary" focused
            className='ap-em'
            type="text"
            value={this.state.address}
            onChange={this.handleAddressChange}
          />
<TextField 
          id="email" label="Email" variant="outlined"
            color="secondary" focused
            className='ap-em'
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <select
            className='ap-em'
            value={this.state.gender}
            onChange={this.handleGenderChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <TextField 
          id="Address" label="Price" variant="outlined"
            color="secondary" focused
            className='ap-em'
            type="number"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
         
          <Button class="btn btn-danger" type="submit">
            ADD BOAT
          </Button>
          <br></br>
          <Link to="/MM">
            <Button class="btn btn-primary" type="submit">
              Go back
            </Button>
          </Link>
          </div>
          </fieldset>
          </form>
        </div>
      </div>
      
       </div> 
      </div>
    );
  }
}

export default Post;


// import React from 'react';
// import Button from '@mui/material/Button';
// import './booking.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Nav from './Nav';
// import './Navbar.scss';
// import { Alert } from '@mui/material';

// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// class UserBooking extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       purchaseId: props.boat.id,
//       boatName: props.boat.boatName,
//       checkInDate: '',
//       checkOutDate: '',
//       phone: '',
//       address: '',
//       email: '',
//       gender: '',
//       price: props.boat.price,
//       successMessage: '',
//     };
//   }
  
//   handlePurchaseIdChange = (event) => {
//     this.setState({ purchaseId: event.target.value });
//   };

//   handleCheckInDateChange = (event) => {
//     this.setState({ checkInDate: event.target.value });
//   };

//   handleCheckOutDateChange = (event) => {
//     this.setState({ checkOutDate: event.target.value });
//   };

//   handlePhoneChange = (event) => {
//     this.setState({ phone: event.target.value });
//   };
//   handleBoatName =(event) =>{
//     this.setState({boatName: event.target.value});
//   }
//   handleAddressChange = (event) => {
//     this.setState({ address: event.target.value });
//   };

//   handleEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };
//   handlePriceChange=(event)=>{
//     this.setState({email: event.target.value});
//   }
//   handleGenderChange = (event) => {
//     this.setState({ gender: event.target.value });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       purchaseId: this.state.purchaseId,
//       boatName: this.state.boatName,
//       checkInDate: this.state.checkInDate,
//       checkOutDate: this.state.checkOutDate,
//       phone: this.state.phone,
//       address: this.state.address,
//       email: this.state.email,
//       gender: this.state.gender,
//       price: this.state.price,
//     };

//     axios
//       .post('http://127.0.0.1:8700/AddBooking', data)
//       .then((response) => {
//         if (response.status === 200) {
//           this.setState({ successMessage: 'Booking Successful' });
       
//         }
//       })
//       .catch((error) => {
//         console.error('Error booking:', error);
//       });
//   };

  
//   render() {
//     return (
//       <div className='App'> 

//       <div className='no'>
//          <Nav/>
//         {/* <div> 
      
//         </div> */}
//       <div className="ap-bg">

//         <div className="ap-fc">
//           <form className="ap-f" action="#" method="POST" onSubmit={this.handleSubmit}>
//             <fieldset>
//               <h1>Application Form</h1>
//               <div className="ap-fn">
//                 <input type="text" placeholder='BoatName' className="ap-fn" value={this.state.boatName} 
//             readOnly/>
//               </div>
//               <div className="ap-oi">
//                 <input type="text" name="Name"  placeholder="Name" className='ap-em' required />
//                 <input type="text" placeholder='purchaseid' className='ap-em' value={this.state.purchaseId} 
//                 readOnly
//                   />
//                 <input type="email" name="email" className="ap-em" placeholder="Email Address" required  value={this.state.email}
//             onChange={this.handleEmailChange}/>
//                 <input type="date" name="dob" className="ap-dob" placeholder="Check In Date"  value={this.state.checkInDate}
//             onChange={this.handleCheckInDateChange} />
//                 <input type="date" name="dob" className="ap-dob" placeholder="Check Out Date"   value={this.state.checkOutDate}
//             onChange={this.handleCheckOutDateChange} />
//                 <select name="gender" className="ap-gender" defaultValue="" required value={this.state.gender}
//             onChange={this.handleGenderChange}>
//                   <option value="" disabled hidden>Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 <input type="text" name="address" className="ap-em" placeholder="Address" required value={this.state.address}
//             onChange={this.handleAddressChange}/>
//                 <input type="tel" name="phone" className="ap-em" placeholder="Contact Number"  value={this.state.phone}
//             onChange={this.handlePhoneChange} />
//             <input type="number" placeholder='Price' required className='ap-fn'  value={this.state.price} 
//             readOnly/>
//               </div>
//               <br /><br />
      
//             <Button class="btn btn-success" >Book Now</Button>
            
//             </fieldset>
//           </form>
//         </div>
//       </div>
//         <Footer/>
//        </div> 
//       </div>
//     );
//   }
// }

// export default UserBooking;
