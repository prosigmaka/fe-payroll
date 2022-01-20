// MUI component
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// Styled MUI Component
import {
  StyledTableCell,
  StyledTableRow,
  StyledButton,
  Status,
} from './../../../styles/section/user/SalarySlipList.styled';
// Temporary Local State for testing purposes
import { useState } from 'react';

const payrollData = [
  { paymentID: '183940359', date: '31-11-2021', amount: '5.500.000', status: 'Completed' },
  { paymentID: '183940360', date: '31-12-2021', amount: '5.500.000', status: 'Completed' },
  { paymentID: '183940361', date: '31-01-2022', amount: '6.500.000', status: 'Scheduled' },
];

const getYear = () => {
  const currentDate = new Date();
  return String(currentDate.getFullYear());
};

const SalarySlipList = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
  const filterHandler = (e) => {
    setFilterYear(e.target.value);
  };

  const filteredPayroll = payrollData.filter((item) => item.date.includes(filterYear) === true);

  return (
    <Container sx={{ marginTop: '3rem', marginBottom: '3rem', width: '60rem' }}>
      <Box>
        <Toolbar disableGutters={true} sx={{ marginBottom: '1rem' }}>
          <Typography sx={{ flex: '1 1 100%' }} variant="h3" id="tableTitle" component="div">
            Payment History
          </Typography>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="filterByYear">Filter by Year</InputLabel>
            <Select labelId="filterByYear" value={filterYear} onChange={filterHandler} label="Filter by Year">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2022">{getYear()}</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
        <TableContainer component={Paper} sx={{ boxShadow: '0 1rem 1rem  rgba(0,0,0,0.2)' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Payment ID</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPayroll.map((row) => (
                <StyledTableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {row.paymentID}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">
                    <Status status={row.status}>{row.status}</Status>
                  </TableCell>
                  <TableCell align="right">
                    <StyledButton size="small" variant="outlined">
                      Detail
                    </StyledButton>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default SalarySlipList;
