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
import moment from "moment";
// import { SalaryData } from "../../../fakeDb/dataDetail";

const getYear = () => {
  const currentDate = new Date();
  return String(currentDate.getFullYear());
};

const PayrollPanel = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [dataPayroll, setDataPayroll] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fileName = "Payroll Data"; // here enter filename for your excel file

  const payroll = async () =>
    await axios
      .get("http://localhost:8081/v1/api/admin/payroll-panel")
      .then((res) => {
        setDataPayroll(res.data.data);
        console.log(res);
      });

  // console.log(moment(dataPayroll[2].payment_date).format("D MMMM YYYY"));

  useEffect(() => {
    payroll();
  }, []);

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

  const filteredPayrollYear = dataPayroll.filter(
    (item) => item.payment_date.includes(filterYear) === true
  );

  const filteredPayrollMonth = filteredPayrollYear.filter(
    (item) =>
      moment(item.payment_date).format("D MMMM YYYY").includes(filterMonth) ===
      true
  );

  const filteredPayrollStatus = filteredPayrollMonth.filter(
    (item) => item.payment_status.includes(filterStatus) === true
  );

  const datas = filteredPayrollStatus.map((data) => ({
    id: data.id,
    id_payment: data.id_payment,
    id_employee: data.id_employee,
    full_name: data.full_name,
    job_title: data.job_title,
    payment_period: data.payment_period,
    payment_date: data.payment_date,
    payment_status: data.payment_status,
    basic_salary: data.basic_salary,
    bpjs: data.bpjs,
    tax: data.tax,

    totalTax: data.basic_salary * data.tax,
    totalDeductions: data.basic_salary * data.tax + data.bpjs,
    totalEarnings: data.basic_salary,
    totalPayment: data.basic_salary * data.tax + data.bpjs - data.basic_salary,
    // return totalTax;
  }));

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
          Payroll Panel {filterYear}
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
                autoWidth
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
                autoWidth
                label="Filter by Month"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 150 }}>
              <InputLabel id="filterByStatus">Filter by Status</InputLabel>
              <Select
                labelId="filterByStatus"
                value={filterStatus}
                onChange={handlerFilterStatus}
                label="Filter by Status"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
                <MenuItem value="Unpaid">Unpaid</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <ExportToExcel apiData={dataPayroll} fileName={fileName} />
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
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Payment Date</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id_payment}
                  </TableCell>
                  <TableCell>{row.full_name}</TableCell>
                  <TableCell align="right">
                    {moment(row.payment_date).format("D MMMM YYYY")}
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" justifyContent="space-between">
                      <span>Rp</span>
                      {String(Math.abs(row.totalPayment))}
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Status status={row.payment_status}>
                      {row.payment_status}
                    </Status>
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/dashboard/admin/review-salary/${row.id}`}
                      target="_blank"
                      style={linkStyle}
                    >
                      <StyledButton size="small" variant="outlined">
                        Detail
                      </StyledButton>
                    </Link>
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={filteredPayrollStatus.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default PayrollPanel;
