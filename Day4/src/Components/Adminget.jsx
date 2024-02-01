import React from 'react'
import { Nav } from 'react-bootstrap'
import AdminNav from './AdminNav'
import AdminFooter from './AdminFooter'
import './Navbar.scss';
import './Caru.css';
import './Adminget.css';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Name, Email, Boat_No) {
  return { Name, Email, Boat_No };
}

const rows = [
  createData('James', 'james1@gmail.com', 6),
  createData('kabilan','Kabi2@gmail.com' , 9),
 
];

function Adminget() {
  return (
    <div className='App'>
        <AdminNav/>
        <div className="ap-bg">
<div className='ap-f'>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Boat_No&nbsp;(g)</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.Boat_No}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

          </div>
</div>
        <div className="footer">
                        <AdminFooter/>
					</div>
    </div>
  )
}

export default Adminget