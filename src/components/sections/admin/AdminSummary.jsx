import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MuiGrid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import SickIcon from "@mui/icons-material/Sick";
import MailIcon from "@mui/icons-material/Mail";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
// import { SalaryData } from "../../../fakeDb/dataDetail";
import {
  Status,
  StyledButton,
  StyledTableCell,
  StyledTableRow,
} from "../../../styles/section/admin/PayrollPanelStyled";
import axios from "axios";
import moment from "moment";

const getYear = () => {
  const currentDate = new Date();
  return String(currentDate.getFullYear());
};

// const currentYear = Date().getFullYear();

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const smallerMixin = (theme) => ({
  [theme.breakpoints.up("xs")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "2rem",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  // width: '15rem',
  // lineHeight: '60px',
  position: "relative",
  padding: "1rem 1rem 1rem 7rem",
  textAlign: "left",
  ...smallerMixin(theme),
}));

const Grid = styled(MuiGrid, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({}));

const Box = styled(Paper)(({ theme, open }) => ({
  position: "absolute",
  width: "5rem",
  height: "5rem",
  top: "-2rem",
  left: "1rem",
  borderRadius: "1rem",
}));

const IconContainer = styled("div")(({ theme }) => ({
  color: theme.palette.common.neutral_white,
}));

const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.neutral_gray_medium,
  fontSize: "3rem",
}));

const IconSize = {
  fontSize: "2rem",
};

function AdminSummary() {
  const [dataPayroll, setDataPayroll] = useState([]);
  const [dataApproval, setDataApproval] = useState([]);

  const payroll = async () =>
    await axios
      .get("http://localhost:8081/v1/api/admin/payroll-panel")
      .then((res) => {
        setDataPayroll(res.data.data);
        console.log(res);
      });

  const approval = async () =>
    await axios
      .get("http://localhost:8081/v1/api/admin/approval")
      .then((res) => {
        setDataApproval(res.data.data);
        console.log(res);
      });

  useEffect(() => {
    payroll();
    approval();
  }, []);

  const annualLeave = (approvals) => {
    let countAnnualLeave = 0;
    for (const leave of approvals) {
      if (leave.leave_type === "Annual") {
        countAnnualLeave++;
      }
    }
    return countAnnualLeave;
  };

  const sickLeave = (approvals) => {
    let countSickLeave = 0;
    for (const leave of approvals) {
      if (leave.leave_type === "Sick") {
        countSickLeave++;
      }
    }
    return countSickLeave;
  };

  const leavePermission = (approvals) => {
    let countLeavePermission = 0;
    for (const leave of approvals) {
      if (leave.leave_type === "Permission") {
        countLeavePermission++;
      }
    }
    return countLeavePermission;
  };

  const filteredPayrollYear = dataPayroll.filter(
    (item) => item.payment_date.includes(getYear()) === true
  );

  const datas = filteredPayrollYear.map((data) => ({
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

  return (
    <Container mx={5}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        mb={3}
        sm={6}
        xs={12}
      >
        <Typography
          variant="h5"
          sx={{ mb: { xs: 1, sm: 0 }, color: "#4c5352" }}
        >
          Approval Summary
        </Typography>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ChevronRightIcon />}
          sx={{ color: "white" }}
          size="small"
        >
          <Link to="/dashboard/admin/approval-panel" style={linkStyle}>
            <Typography variant="button">View All</Typography>
          </Link>
        </Button>
      </Stack>
      <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
        <Grid item sm={6} md={6} xs={12} lg={4}>
          <Item elevation={6}>
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom right, #57C1D6,#4EAEC2)",
              }}
              elevation={6}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
              >
                <Grid item>
                  <IconContainer variant="h4">
                    <HomeRepairServiceIcon sx={IconSize} />
                  </IconContainer>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item textAlign="right">
                <Typography variant="h4">Annual Leave</Typography>
                <Value variant="h4">{annualLeave(dataApproval)}</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item sm={6} md={6} xs={12} lg={4}>
          <Item elevation={6}>
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom right, #A79AB2,#9d7cb8)",
              }}
              elevation={6}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
              >
                <Grid item>
                  <IconContainer variant="h4">
                    <MailIcon sx={IconSize} />
                  </IconContainer>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item textAlign="right">
                <Typography variant="h4">Leave Permission</Typography>
                <Value variant="h4">{leavePermission(dataApproval)}</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item sm={6} md={6} xs={12} lg={4}>
          <Item elevation={6}>
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom right, #F2A439,#F08C36)",
              }}
              elevation={6}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
              >
                <Grid item>
                  <IconContainer variant="h4">
                    <SickIcon sx={IconSize} />
                  </IconContainer>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item textAlign="right">
                <Typography variant="h4">Sick Leave</Typography>
                <Value variant="h4">{sickLeave(dataApproval)}</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
      {/* <PayrollPanel /> */}
      <Container sx={{ width: "100%", p: "0 !important" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
          mb={3}
          sm={6}
          xs={12}
          mt={8}
        >
          <Typography
            variant="h5"
            sx={{ mb: { xs: 1, sm: 0 }, color: "#4c5352" }}
          >
            Payroll Summary {getYear()}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ChevronRightIcon />}
            sx={{ color: "white" }}
            size="small"
          >
            <Link to="/dashboard/admin/payroll-panel" style={linkStyle}>
              <Typography variant="button">View All</Typography>
            </Link>
          </Button>
        </Stack>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "0 1rem 1rem  rgba(0,0,0,0.2)",
            maxHeight: "54vh",
            overflow: "hidden",
          }}
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
              {datas.slice(0, 5).map((row) => (
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
      </Container>
    </Container>
  );
}

export default AdminSummary;
