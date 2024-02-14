import { Component } from 'react';
import './UBook.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MM from './MM';
import Post from './Post';

class UBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseId: props.boat.id,
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
    this.setState({ purchaseId: event.target.value });
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

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      purchaseId: this.state.purchaseId,
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
          this.setState({ successMessage: 'Booking Successful' });
        }
      })
      .catch((error) => {
        console.error('Error booking:', error);
      });
  };

  render() {
    return (
      <div className="post-container">
        {this.state.successMessage && <p>{this.state.successMessage}</p>}
        <form onSubmit={this.handleSubmit} className="post-form">
          <label className="post-label">Purchase Id</label>
          <input
            className="post-input"
            type="text"
            value={this.state.purchaseId}
            onChange={this.handlePurchaseIdChange}
          />

          <label className="post-label">Boat Name</label>
          <input
            className="post-input"
            type="text"
            value={this.state.boatName}
            readOnly
          />

          <label className="post-label">Check-in Date</label>
          <input
            className="post-input"
            type="date"
            value={this.state.checkInDate}
            onChange={this.handleCheckInDateChange}
          />

          <label className="post-label">Check-out Date</label>
          <input
            className="post-input"
            type="date"
            value={this.state.checkOutDate}
            onChange={this.handleCheckOutDateChange}
          />

          <label className="post-label">Phone</label>
          <input
            className="post-input"
            type="text"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />

          <label className="post-label">Address</label>
          <input
            className="post-input"
            type="text"
            value={this.state.address}
            onChange={this.handleAddressChange}
          />

          <label className="post-label">Email</label>
          <input
            className="post-input"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <label className="post-label">Gender</label>
          <select
            className="post-input"
            value={this.state.gender}
            onChange={this.handleGenderChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label className="post-label">Price</label>
          <input
            className="post-input"
            type="number"
            value={this.state.price}
            readOnly
          />

          <center>
            <button className="post-button" type="submit">
              BOOK
            </button>
          </center>

          <Link to="/Uhome">
            <center>
              <button className="post-back-button" type="button">
                BACK
              </button>
            </center>
          </Link>
        </form>
      </div>
    );
  }
}

export default UBook;
