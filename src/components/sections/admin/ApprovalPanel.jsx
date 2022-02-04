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
} from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

import { ExportToExcel } from "../../../hooks/exportToExcel";
import useDocTitle from "../../../hooks/useDocTitle";

// Styled MUI Component
import {
  StyledTableCell,
  StyledTableRow,
  StyledButton,
  Status,
} from "./../../../styles/section/admin/ApprovalPanelStyled";
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

const ApprovalPanel = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterType, setFilterType] = useState("");
  const [dataApproval, setDataApproval] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fileName = "Leave Request Data"; // here enter filename for your excel file

  const approval = async () =>
    await axios
      .get("http://localhost:8081/v1/api/admin/approval")
      .then((res) => {
        setDataApproval(res.data.data);
        console.log(res);
      });

  // console.log(moment(dataPayroll[2].payment_date).format("D MMMM YYYY"));

  useEffect(() => {
    approval();
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

  const handlerFilterType = (e) => {
    setFilterType(e.target.value);
  };

  useDocTitle("Approval Panel");

  const filteredStartDateYear = dataApproval.filter(
    (item) => item.start_date.includes(filterYear) === true
  );

  const filteredStartDateMonth = filteredStartDateYear.filter(
    (item) =>
      moment(item.start_date).format("D MMMM YYYY").includes(filterMonth) ===
      true
  );

  const filteredLeaveType = filteredStartDateMonth.filter(
    (item) => item.leave_type.includes(filterType) === true
  );

  const filteredApprovalStatus = filteredLeaveType.filter(
    (item) => item.approval_status.includes(filterStatus) === true
  );

  function getDifferenceInDays(startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const datas = filteredApprovalStatus.map((data) => ({
    id: data.id,
    id_request: data.id_request,
    id_employee: data.id_employee,
    full_name: data.full_name,
    leave_type: data.leave_type,
    job_title: data.job_title,
    division: data.division,
    address: data.address,
    start_date: data.start_date,
    end_date: data.end_date,
    approval_status: data.approval_status,

    duration: getDifferenceInDays(data.start_date, data.end_date),
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
          Approval Panel {filterYear}
          {/* Approval Panel {getYear()} */}
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
              <InputLabel id="filterByYear">Year</InputLabel>
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
              <InputLabel id="filterByMonth">Month</InputLabel>
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
              <InputLabel id="filterByStatus">Leave Type</InputLabel>
              <Select
                labelId="filterByLeaveType"
                value={filterType}
                onChange={handlerFilterType}
                label="Filter by Leave Type"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Annual">Annual Leave</MenuItem>
                <MenuItem value="Permission">Leave Permission</MenuItem>
                <MenuItem value="Sick">Sick Leave</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 150 }}>
              <InputLabel id="filterByStatus">Status</InputLabel>
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
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <ExportToExcel apiData={dataApproval} fileName={fileName} />
            {/* <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon />}
              sx={{ color: "white" }}
            >
              <Link to="/dashboard/admin/payment-form" style={linkStyle}>
                New Approval
              </Link>
            </Button> */}
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
              <StyledTableCell>Request ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Leave Type</StyledTableCell>
              <StyledTableCell>Address During Leave</StyledTableCell>
              <StyledTableCell align="right">From Date</StyledTableCell>
              <StyledTableCell align="right">To Date</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
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
                    {row.id_request}
                  </TableCell>
                  <TableCell>{row.full_name}</TableCell>
                  <TableCell>{row.leave_type}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell align="right">
                    {moment(row.start_date).format("D MMMM YYYY")}
                  </TableCell>
                  <TableCell align="right">
                    {moment(row.end_date).format("D MMMM YYYY")}
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" justifyContent="flex-end">
                      {/* {getDifferenceInDays(row.start_date, row.end_date)} */}
                      {row.duration}
                      <span style={{ marginLeft: "0.5rem" }}>day(s)</span>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Status status={row.approval_status}>
                      {row.approval_status}
                    </Status>
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/dashboard/admin/review-approval/${row.id}`}
                      // to={`/dashboard/admin/review-approval`}
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
        count={filteredApprovalStatus.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default ApprovalPanel;
