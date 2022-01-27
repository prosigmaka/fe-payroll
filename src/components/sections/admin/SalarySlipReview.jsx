import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../img/prosigmaka-transparan-scaled.png";
import "../../../styles/section/user/PdfExport.css";

const SalarySlipReview = (props) => {
  const [dataPayroll, setDataPayroll] = useState([]);

  const totalTax = dataPayroll.basic_salary * dataPayroll.tax;
  const totalDeduction = dataPayroll.bpjs + totalTax;
  const totalEarnings = dataPayroll.basic_salary;
  const totalPayment = totalEarnings - totalDeduction;

  const url_path = window.location.pathname.split("/");
  const payrollId = url_path[url_path.length - 1];

  const payrollDetail = async () =>
    await axios
      .get(`http://localhost:8081/v1/api/admin/payroll-panel/${payrollId}`)
      .then((res) => {
        setDataPayroll(res.data.data);
        // console.log(res.data.data);
      });

  useEffect(() => {
    payrollDetail();
    // eslint-disable-next-line
  }, []);

  const Img = styled("img")({
    // margin: "auto 0",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#0A0708",
      color: "white",
      fontSize: 12,
      fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#B1B1B1",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        my: 4,
        px: 3,
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3, p: { xs: 0, md: 3, lg: 6 } }}>
            <CardContent className="pdf-page">
              <Grid item xs={6} sx={{ mb: 5 }}>
                <Img
                  alt="logo"
                  src={logo}
                  sx={{ width: { xs: "100%", sm: "50%" }, mb: 1 }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                direction="column"
                container
                spacing={3}
                key={dataPayroll.id}
              >
                <Grid item xs={12} container spacing={3}>
                  <Grid item xs={6}>
                    <Grid item xs={12} container>
                      <Grid item xs={12} sm={5}>
                        <Typography
                          variant="body2"
                          mb={0.5}
                          fontWeight="bold"
                          fontSize={12}
                        >
                          Employee ID
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={7} sx={{ mb: { xs: 1, sm: 0 } }}>
                        <Typography variant="body2" mb={0.5} fontSize={12}>
                          {dataPayroll.id_employee}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} container>
                      <Grid item xs={12} sm={5}>
                        <Typography
                          variant="body2"
                          mb={0.5}
                          fontWeight="bold"
                          fontSize={12}
                        >
                          Employee Name
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={7} sx={{ mb: { xs: 1, sm: 0 } }}>
                        <Typography variant="body2" mb={0.5} fontSize={12}>
                          {dataPayroll.full_name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} container>
                      <Grid item xs={12} sm={5}>
                        <Typography
                          variant="body2"
                          mb={0.5}
                          fontWeight="bold"
                          fontSize={12}
                        >
                          Job Title
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={7} sx={{ mb: { xs: 1, sm: 0 } }}>
                        <Typography variant="body2" mb={0.5} fontSize={12}>
                          {dataPayroll.job_title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid item xs={12} container>
                      <Grid item xs={12} sm={5}>
                        <Typography
                          variant="body2"
                          mb={0.5}
                          fontWeight="bold"
                          fontSize={12}
                        >
                          Payment ID
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={7} sx={{ mb: { xs: 1, sm: 0 } }}>
                        <Typography variant="body2" mb={0.5} fontSize={12}>
                          {dataPayroll.id_employee}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} container>
                      <Grid item xs={12} sm={5}>
                        <Typography
                          variant="body2"
                          mb={0.5}
                          fontWeight="bold"
                          fontSize={12}
                        >
                          Payment Period
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={7} sx={{ mb: { xs: 1, sm: 0 } }}>
                        <Typography variant="body2" mb={0.5} fontSize={12}>
                          {dataPayroll.payment_period}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} container>
                      <Grid item xs={12} sm={5}>
                        <Typography
                          variant="body2"
                          mb={0.5}
                          fontWeight="bold"
                          fontSize={12}
                        >
                          Payment Date
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={7} sx={{ mb: { xs: 1, sm: 0 } }}>
                        <Typography variant="body2" mb={0.5} fontSize={12}>
                          {dataPayroll.payment_date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} mt={5}>
                <TableContainer component={Paper}>
                  <Table aria-label="salary table" size="small">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Description</StyledTableCell>
                        <StyledTableCell align="right">
                          Earnings
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Deductions
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody key={dataPayroll.id}>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          Basic Salary
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Stack direction="row" justifyContent="space-between">
                            <span>Rp</span>
                            {String(dataPayroll.basic_salary)}
                          </Stack>
                        </StyledTableCell>
                        <StyledTableCell align="right" />
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row" colSpan={2}>
                          BPJS
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Stack direction="row" justifyContent="space-between">
                            <span>Rp</span>
                            {String(dataPayroll.bpjs)}
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row" colSpan={2}>
                          Tax
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Stack direction="row" justifyContent="space-between">
                            <span>Rp</span>
                            {String(totalTax)}
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{ fontWeight: "bold" }}
                        >
                          Total
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{ fontWeight: "bold" }}
                        >
                          <Stack direction="row" justifyContent="space-between">
                            <span>Rp</span>
                            {String(totalEarnings)}
                          </Stack>
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{ fontWeight: "bold" }}
                        >
                          <Stack direction="row" justifyContent="space-between">
                            <span>Rp</span>
                            {String(totalDeduction)}
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow
                        sx={{
                          backgroundColor: "#747474 !important",
                        }}
                      >
                        <StyledTableCell
                          component="th"
                          scope="row"
                          colSpan={2}
                          sx={{
                            color: "white !important",
                            fontWeight: "bold",
                          }}
                        >
                          Net Payment
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            color: "white !important",
                            fontWeight: "bold",
                          }}
                        >
                          <Stack direction="row" justifyContent="space-between">
                            <span>Rp</span>
                            {String(totalPayment)}
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalarySlipReview;
