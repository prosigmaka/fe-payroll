import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

function SalaryPaymentForm() {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [dataSubmit, setDataSubmit] = useState({
    id_payment: 0,
    id_employee: 0,
    full_name: "",
    job_title: "",
    payment_period: "",
    payment_date: "",
    payment_status: "",
    basic_salary: 0,
    bpjs: 100000,
    tax: 0.05,
    total_salary: 0,
  });

  const handleChange = (event) => {
    setDataSubmit({
      ...dataSubmit,
      [event.target.name]: event.target.value,
    });
    // console.log(dataSubmit);
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:8081/v1/api/admin/payroll-panel/post",
    //       dataSubmit
    //     );
    //     if (response.status === 201) {
    //       console.log(response.data);
    //       setDataSubmit({
    //         id_payment: 0,
    //         id_employee: 0,
    //         full_name: "",
    //         job_title: "",
    //         payment_period: "",
    //         payment_date: "",
    //         payment_status: "",
    //         basic_salary: 0,
    //         bpjs: 100000,
    //         tax: 0.05,
    //         total_salary: 0,
    //       });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    await axios
      .post(
        "http://localhost:8081/v1/api/admin/payroll-panel/post",
        dataSubmit,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log("Post Success, Status Code", res.status);
        console.log(res.data.data);
        setAlertSuccess(true);
        setAlertFail(false);
        setDataSubmit({
          id_payment: 0,
          id_employee: 0,
          full_name: "",
          job_title: "",
          payment_period: "",
          payment_date: "",
          payment_status: "",
          basic_salary: 0,
          bpjs: 100000,
          tax: 0.05,
          total_salary: 0,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlertFail(true);
        setAlertSuccess(false);
      });
  };

  return (
    <Container mt={5}>
      <Collapse in={alertSuccess}>
        <Alert
          severity="success"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 5 }}
        >
          Submit Form Success -
          <Link to={`/dashboard/admin/payroll-panel`} style={linkStyle}>
            {" "}
            Back to Payroll Panel
          </Link>
        </Alert>
      </Collapse>
      <Collapse in={alertFail}>
        <Alert
          severity="error"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertFail(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 5 }}
        >
          Submit Form Failed -
          <Link to={`/dashboard/admin/payroll-panel`} style={linkStyle}>
            {" "}
            Back to Payroll Panel
          </Link>
        </Alert>
      </Collapse>
      <Card style={{ maxWidth: "50vw", margin: "0 auto", padding: "5px" }}>
        <CardContent>
          <Typography variant="h3" mb={5}>
            Form Input Payroll Baru
          </Typography>
          <Grid container spacing={2} maxHeight="56vh" overflow="auto">
            <Grid xs={12} item>
              <TextField
                label="ID Payment"
                name="id_payment"
                value={dataSubmit.id_payment}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="ID Employee"
                name="id_employee"
                value={dataSubmit.id_employee}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Nama Lengkap"
                name="full_name"
                value={dataSubmit.full_name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Posisi"
                name="job_title"
                value={dataSubmit.job_title}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="select-payment-period">
                  Payment Period
                </InputLabel>
                <Select
                  labelId="select-payment-period"
                  id="payment-period"
                  name="payment_period"
                  value={dataSubmit.payment_period}
                  onChange={handleChange}
                  autoWidth
                  label="Payment Period"
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Weekly">Weekly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Annual">Annual</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="date"
                date-date-format="dd-mmm-yyyy"
                // label="Payment Date"
                name="payment_date"
                value={dataSubmit.payment_date}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="select-payment-status">Status</InputLabel>
                <Select
                  labelId="select-payment-status"
                  id="payment-status"
                  name="payment_status"
                  value={dataSubmit.payment_status}
                  onChange={handleChange}
                  autoWidth
                  label="Status"
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Unpaid">Unpaid</MenuItem>
                  <MenuItem value="Paid">Paid</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="select-payment-tax">Tax</InputLabel>
                <Select
                  labelId="select-payment-tax"
                  id="payment-tax"
                  name="tax"
                  value={dataSubmit.tax}
                  onChange={handleChange}
                  autoWidth
                  label="Tax"
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="0.05">5%</MenuItem>
                  <MenuItem value="0.1">10%</MenuItem>
                  <MenuItem value="0.15">15%</MenuItem>
                  <MenuItem value="0.2">20%</MenuItem>
                  <MenuItem value="0.25">25%</MenuItem>
                  <MenuItem value="0.3">30%</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <TextField
                disabled
                name="bpjs"
                id="bpjs"
                label="BPJS"
                value={dataSubmit.bpjs}
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Basic Salary"
                name="basic_salary"
                value={dataSubmit.basic_salary}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Total Salary"
                name="total_salary"
                value={dataSubmit.total_salary}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            {/* <Grid
              xs={12}
              item
              mt={2}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                style={{ marginRight: "10px" }}
                type="submit"
                variant="contained"
                sx={{ color: "white" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button color="error" variant="contained">
                <Link to="/dashboard/admin/payroll-panel" style={linkStyle}>
                  Batal
                </Link>
              </Button>
            </Grid> */}
          </Grid>
          <Stack direction="row" justifyContent="flex-end" spacing={1} mt={3}>
            <Button
              style={{ marginRight: "10px" }}
              type="submit"
              variant="contained"
              sx={{ color: "white" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button color="error" variant="contained">
              <Link to="/dashboard/admin/payroll-panel" style={linkStyle}>
                Batal
              </Link>
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SalaryPaymentForm;
