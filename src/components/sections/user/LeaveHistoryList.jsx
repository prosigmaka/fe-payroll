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

import useDocTitle from '../../../hooks/useDocTitle';
// Styled MUI Component
import {
  StyledTableCell,
  StyledTableRow,
  StyledButton,
  Status,
} from '../../../styles/section/user/LeaveHistoryList.styled';
// Temporary Local State for testing purposes
import { useState } from 'react';

const leaveData = [
  {
    requestID: '290120223370',
    type: 'sakit',
    reason: 'sakit kepala',
    from: '29-01-2022',
    to: '30-01-2022',
    duration: '1',
    status: 'Approved',
  },
  {
    requestID: '020220223370',
    type: 'cuti',
    reason: 'cuti',
    from: '02-02-2022',
    to: '05-02-2022',
    duration: '3',
    status: 'Waiting Approval',
  },
  {
    requestID: '250120213370',
    type: 'cuti',
    reason: 'cuti',
    from: '25-12-2021',
    to: '27-12-2021',
    duration: '2',
    status: 'Rejected',
  },
];

const getYear = () => {
  const currentDate = new Date();
  return String(currentDate.getFullYear());
};

const LeaveHistoryList = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
  const filterHandler = (e) => {
    setFilterYear(e.target.value);
  };

  useDocTitle('Payroll History');

  const filteredLeaveData = leaveData.filter((item) => item.from.includes(filterYear) === true);

  return (
    <Box sx={{ width: '100%' }}>
      <Toolbar disableGutters={true} sx={{ marginBottom: '1rem' }}>
        <Typography sx={{ flex: '1 1 100%' }} variant="h3" id="tableTitle" component="div">
          Leave History in {filterYear}
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
              <StyledTableCell>RequestID</StyledTableCell>
              <StyledTableCell align="right">Leave Type</StyledTableCell>
              <StyledTableCell align="right">Reason</StyledTableCell>
              <StyledTableCell align="right">From Date</StyledTableCell>
              <StyledTableCell align="right">To Date</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLeaveData.map((row) => (
              <StyledTableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {row.requestID}
                </TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.reason}</TableCell>
                <TableCell align="right">{row.from}</TableCell>
                <TableCell align="right">{row.to}</TableCell>
                <TableCell align="right">{row.duration} day(s)</TableCell>
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
  );
};

export default LeaveHistoryList;
