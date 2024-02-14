import { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boatName: '',
      boatDescription: '',
      capacity: 0,
      phone: '',
      noOfPersons: 0,
      bImage: '',
      price: 0.0,
      successMessage: '',
    };
  }

  handleBoatNameChange = (event) => {
    this.setState({ boatName: event.target.value });
  };

  handleBoatDescriptionChange = (event) => {
    this.setState({ boatDescription: event.target.value });
  };

  handleCapacityChange = (event) => {
    this.setState({ capacity: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleNoOfPersonsChange = (event) => {
    this.setState({ noOfPersons: event.target.value });
  };

  handleBImageChange = (event) => {
    this.setState({ bImage: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      boatName: this.state.boatName,
      boatDescription: this.state.boatDescription,
      capacity: this.state.capacity,
      phone: this.state.phone,
      noOfPersons: this.state.noOfPersons,
      bImage: this.state.bImage,
      price: this.state.price,
    };

    axios
      .post('http://127.0.0.1:8700/add', data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ successMessage: 'Boat Added Successfully' });
        }
      })
      .catch((error) => {
        console.error('Error adding boat:', error);
      });
  };

  render() {
    return (
      <div>
        {this.state.successMessage && <p>{this.state.successMessage}</p>}

        <form onSubmit={this.handleSubmit} className="sign-form">
          <label className="sign-label">Boat Name</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.boatName}
            onChange={this.handleBoatNameChange}
          />

          <label className="sign-label">Boat Description</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.boatDescription}
            onChange={this.handleBoatDescriptionChange}
          />

          <label className="sign-label">Capacity</label>
          <input
            className="sign-input"
            type="number"
            value={this.state.capacity}
            onChange={this.handleCapacityChange}
          />

          <label className="sign-label">Phone</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />

          <label className="sign-label">Number of Persons</label>
          <input
            className="sign-input"
            type="number"
            value={this.state.noOfPersons}
            onChange={this.handleNoOfPersonsChange}
          />

          <label className="sign-label">Boat Image URL</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.bImage}
            onChange={this.handleBImageChange}
          />

          <label className="sign-label">Price</label>
          <input
            className="sign-input"
            type="number"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />

          <button className="login-button" type="submit">
            ADD BOAT
          </button>

          <Link to="/Ahome">
            <button className="back5" type="submit">
              BACK
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Post;