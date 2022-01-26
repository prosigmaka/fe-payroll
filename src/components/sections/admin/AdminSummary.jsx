import React from "react";
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
import { SalaryData } from "../../../fakeDb/dataDetail";
import {
  Status,
  StyledButton,
  StyledTableCell,
  StyledTableRow,
} from "../../../styles/section/admin/PayrollPanelStyled";

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

const filteredPayrollYear = SalaryData.filter(
  (item) => item.paymentDate.includes("2022") === true
);

function AdminSummary() {
  return (
    <Container mx={5}>
      <Stack
        container
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
                <Typography variant="h4">Leave Request</Typography>
                <Value variant="h4">0</Value>
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
                <Typography variant="h4">Leave Permit</Typography>
                <Value variant="h4">0</Value>
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
                <Typography variant="h4">Leave Sick</Typography>
                <Value variant="h4">0</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
      {/* <PayrollPanel /> */}
      <Container sx={{ width: "100%", p: "0 !important" }}>
        <Stack
          container
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
                <StyledTableCell>Employee ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Payment Date</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPayrollYear.slice(0, 5).map((row) => (
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
      </Container>
    </Container>
  );
}

export default AdminSummary;
