import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
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
import { PDFExport } from "@progress/kendo-react-pdf";
import React, { useRef } from "react";
import { SalaryData } from "../../../fakeDb/dataDetail";
import logo from "../../../img/prosigmaka-transparan-scaled.png";
import "../../../styles/section/user/PdfExport.css";

const SalarySlip = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = new Date().getFullYear();

  const date = new Date();
  const month = months[date.getMonth()];

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

  const pdfExport = useRef(null);

  const handlePDFExport = () => {
    pdfExport.current.save();
  };

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
        <Grid item xs={12} container sx={{ mb: 3, alignItems: "center" }}>
          <Grid item xs={8}>
            <Typography variant="h5">Salary Detail</Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "end" }}>
            <Button
              size="small"
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handlePDFExport}
              sx={{ color: "white" }}
            >
              Export
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3, p: { xs: 0, md: 3, lg: 6 } }}>
            <PDFExport
              paperSize="A4"
              fileName={`Salary for ${month} ${year}`}
              ref={pdfExport}
              margin={20}
            >
              <CardContent className="pdf-page">
                <Grid item xs={6} sx={{ mb: 5 }}>
                  <Img
                    alt="logo"
                    src={logo}
                    sx={{ width: { xs: "100%", sm: "50%" }, mb: 1 }}
                  />
                </Grid>
                {SalaryData.map((data, index) => (
                  <Grid
                    item
                    xs={12}
                    direction="column"
                    container
                    key={index}
                    spacing={3}
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
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.employeeId}
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
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.name}
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
                              Division
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.division}
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
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.jobTitle}
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
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.paymentId}
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
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.paymentPeriod}
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
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.paymentDate}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

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
                              Work Days
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.workDays}
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
                              Work Hours
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.workHours}
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
                              Overtime Hours
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.overtimeHours}
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
                              Absence
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.absence}
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
                              Leave Balance
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={7}
                            sx={{ mb: { xs: 1, sm: 0 } }}
                          >
                            <Typography variant="body2" mb={0.5} fontSize={12}>
                              {data.leaveBalance}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
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
                      {SalaryData.map((data, index) => (
                        <TableBody key={index}>
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              Basic Salary
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {data.basicSalary}
                            </StyledTableCell>
                            <StyledTableCell align="right" />
                          </StyledTableRow>
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              BPJS
                            </StyledTableCell>
                            <StyledTableCell align="right" colSpan={2}>
                              {data.bpjs}
                            </StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              Tax
                            </StyledTableCell>
                            <StyledTableCell align="right" colSpan={2}>
                              {data.tax}
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
                              {data.basicSalary}
                            </StyledTableCell>
                            <StyledTableCell
                              align="right"
                              sx={{ fontWeight: "bold" }}
                            >
                              {data.tax + data.bpjs}
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
                              sx={{
                                color: "white !important",
                                fontWeight: "bold",
                              }}
                            >
                              Net Payment
                            </StyledTableCell>
                            <StyledTableCell
                              align="right"
                              colSpan={2}
                              sx={{
                                color: "white !important",
                                fontWeight: "bold",
                              }}
                            >
                              {data.basicSalary - data.tax - data.bpjs}
                            </StyledTableCell>
                          </StyledTableRow>
                        </TableBody>
                      ))}
                    </Table>
                  </TableContainer>
                </Grid>
              </CardContent>
            </PDFExport>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalarySlip;
