// MUI component
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { ExportToExcel } from "../../../hooks/exportToExcel";
import useDocTitle from "../../../hooks/useDocTitle";

// Styled MUI Component
import {
  StyledTableCell,
  StyledTableRow,
  StyledButton,
  Status,
} from "./../../../styles/section/admin/PayrollPanelStyled";
// Temporary Local State for testing purposes
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import axios from "axios";
import { SalaryData } from "../../../fakeDb/dataDetail";

const getYear = () => {
  const currentDate = new Date();
  return String(currentDate.getFullYear());
};

const PayrollPanel = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fileName = "Payroll Data"; // here enter filename for your excel file

  const payroll = async () =>
    await axios
      .get("http://localhost:8081/v1/dashboard/admin/payroll-panel")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });

  useEffect(() => {
    payroll();
  }, []);

  console.log(data);

  const handlerFilterYear = (e) => {
    setFilterYear(e.target.value);
  };

  const handlerFilterMonth = (e) => {
    setFilterMonth(e.target.value);
  };

  const handlerFilterStatus = (e) => {
    setFilterStatus(e.target.value);
  };

  useDocTitle("Payroll Panel");

  const filteredPayrollYear = SalaryData.filter(
    (item) => item.paymentDate.includes(filterYear) === true
  );

  const filteredPayrollMonth = filteredPayrollYear.filter(
    (item) => item.paymentDate.includes(filterMonth) === true
  );

  const filteredPayrollStatus = filteredPayrollMonth.filter(
    (item) => item.paymentStatus.includes(filterStatus) === true
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Container sx={{ width: "100%", p: "0 !important" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        mb={2}
      >
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h3"
          id="tableTitle"
          component="div"
        >
          {/* Payroll in {filterYear} */}
          Payroll Panel
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt={0}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={4}
          >
            <FormControl variant="standard" sx={{ m: 1, width: 150 }}>
              <InputLabel id="filterByYear">Filter by Year</InputLabel>
              <Select
                labelId="filterByYear"
                value={filterYear}
                onChange={handlerFilterYear}
                label="Filter by Year"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={getYear() - 1}>{getYear() - 1}</MenuItem>
                <MenuItem value={getYear()}>{getYear()}</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 150 }}>
              <InputLabel id="filterByMonth">Filter by Month</InputLabel>
              <Select
                labelId="filterByMonth"
                value={filterMonth}
                onChange={handlerFilterMonth}
                label="Filter by Month"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="01">January</MenuItem>
                <MenuItem value="02">February</MenuItem>
                <MenuItem value="03">March</MenuItem>
                <MenuItem value="04">April</MenuItem>
                <MenuItem value="05">May</MenuItem>
                <MenuItem value="06">June</MenuItem>
                <MenuItem value="07">July</MenuItem>
                <MenuItem value="08">August</MenuItem>
                <MenuItem value="09">September</MenuItem>
                <MenuItem value="10">October</MenuItem>
                <MenuItem value="11">November</MenuItem>
                <MenuItem value="12">December</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 150 }}>
              <InputLabel id="filterByStatus">Filter by Status</InputLabel>
              <Select
                labelId="filterByStatus"
                value={filterStatus}
                onChange={handlerFilterStatus}
                label="Filter by Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <ExportToExcel apiData={data} fileName={fileName} />
            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon />}
              sx={{ color: "white" }}
            >
              <Link to="/dashboard/admin/payment-form" style={linkStyle}>
                New Payroll
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "0 1rem 1rem  rgba(0,0,0,0.2)", maxHeight: "54vh" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Payment ID</StyledTableCell>
              <StyledTableCell>Employee ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Payment Date</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPayrollStatus
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {row.paymentId}
                  </TableCell>
                  <TableCell>{row.employeeId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.paymentDate}</TableCell>
                  <TableCell align="right">{row.totalSalary}</TableCell>
                  <TableCell align="center">
                    <Status status={row.paymentStatus}>
                      {row.paymentStatus}
                    </Status>
                  </TableCell>
                  <TableCell align="center">
                    <StyledButton size="small" variant="outlined">
                      <Link
                        to={`/dashboard/admin/review-salary`}
                        target="_blank"
                        style={linkStyle}
                      >
                        Detail
                      </Link>
                    </StyledButton>
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={SalaryData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default PayrollPanel;
