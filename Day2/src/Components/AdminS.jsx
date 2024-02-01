import { useState } from 'react';
import './Admin.css'; // Import the CSS file
import { Button } from '@mui/material';

const AdminS = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfBoats: 0,
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (formData.name.trim() === '' || formData.email.trim() === '') {
      alert('Name and Email are required fields.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (formData.numberOfBoats < 0) {
      alert('Number of boats should be a non-negative integer.');
      return;
    }

    // Update the table data
    setTableData([...tableData, formData]);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      numberOfBoats: 0,
    });
  };

  return (
    <div className="admin-get-container">
      <form className="form-widget" onSubmit={handleSubmit}>
        <label>
          
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="number"
            name="numberOfBoats"
            placeholder='Boat No'
            value={formData.numberOfBoats}
            onChange={handleChange}
          />
        </label>
        <br />
        <Button type="submit" class='btn btn-success'>Add Boat</Button>
      </form>

      {tableData.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number of Boats</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.numberOfBoats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminS;