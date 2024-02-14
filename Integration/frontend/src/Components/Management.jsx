import { Component } from "react";
import './Management.css';
import axios from 'axios';

class Management extends Component {
  state = {
    data: [],
    editedPrice: {} // Track edited prices
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://localhost:8700/get')
      .then(response => {
        this.setState({ 
          data: response.data,
          editedPrice: response.data.reduce((acc, item) => {
            acc[item.id] = item.price;
            return acc;
          }, {})
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDeleteClick = (id) => {
    console.log(`Delete item with ID: ${id}`);
    // Handle delete logic here, e.g., show confirmation dialog and delete item
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`http://localhost:8700/api/boatHouses/${id}`)
        .then(response => {
          console.log(response.data);
          // After successful delete, fetch data again to update the view
          this.fetchData();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleEditClick = (id) => {
    const newPrice = prompt("Enter the new price:");
    if (newPrice !== null) {
      this.setState(prevState => ({
        editedPrice: {
          ...prevState.editedPrice,
          [id]: newPrice
        }
      }), () => {
        // After updating state, send PUT request to update the price in the backend
        this.handleSaveClick(id, newPrice);
      });
    }
  }

  handleSaveClick = (id, updatedPrice) => {
    // Send PUT request to update the price on the server
    axios.put(`http://localhost:8700/update/${id}/${updatedPrice}`)
      .then(response => {
        console.log(response.data);
        // Fetch data again to update the view
        this.fetchData();
      })
      .catch(error => {
        console.log('Error updating price:', error);
        // Handle error here, such as displaying an error message to the user
      });
  }

  render() {
    return (
      <div className="card-container">
        {this.state.data.map(item => (
          <div className="card" key={item.id}>
            <img src={item.imageurl} alt={item.boatName} />
            <h3>Boat ID: {item.id}</h3>
            <h3>Boat Name: {item.boatName}</h3>
            <p>Boat Price: {this.state.editedPrice[item.id] !== undefined ? this.state.editedPrice[item.id] : item.price}</p>
            <div className="button-group">
              <button onClick={() => this.handleEditClick(item.id)}>Edit</button>
              <button onClick={() => this.handleDeleteClick(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Management;
