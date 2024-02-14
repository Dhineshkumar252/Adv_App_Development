import axios from "axios";
import React, { Component } from "react";
import './Userget.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Userget extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8700/getBooking')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <TableContainer component={Paper}>
       <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Boat_No&nbsp;(g)</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map(item => (
            <StyledTableRow key={item.purchaseId}>
            <StyledTableCell component="th" scope="row">
              {item.purchaseId}
            </StyledTableCell>
            <StyledTableCell align="right">{}</StyledTableCell>
            <StyledTableCell align="right">{}</StyledTableCell>
            
          </StyledTableRow>
            // <tr key={item.purchaseId}>
            //   <td>{item.purchaseId}</td>
            //   <td>{item.boatName}</td>
            //   <td>{item.checkInDate}</td>
            //   <td>{item.checkOutDate}</td>
            //   <td>{item.phone}</td>
            //   <td>{item.address}</td>
            //   <td>{item.email}</td>
            //   <td>{item.gender}</td>
            //   <td>{item.price}</td>
            // </tr>
          ))}
         </TableBody>
      </Table>
      </TableContainer>
    );
  }
}

export default Userget;
