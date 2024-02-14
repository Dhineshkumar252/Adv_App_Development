import { Component } from "react";
import './AdminCardv.css';
import axios from 'axios';
import Management from "./Management";


class AdminCardv extends Component {

  render() {   
    return (
      <div className="card-container">
      <Management/>
      </div>
    );
  }
}

export default AdminCardv;
