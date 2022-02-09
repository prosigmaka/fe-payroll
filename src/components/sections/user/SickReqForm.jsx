import React, { useState } from "react";
import {
  Alert,
  Box,
  Container,
  Collapse,
  IconButton,
  Stack,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

function SickReqForm() {
  const dataForm = {
    id_request: 0,
    id_employee: 0,
    full_name: "",
    leave_type: "Sick",
    job_title: "",
    division: "",
    description: "",
    address: "",
    start_date: "",
    end_date: "",
    approval_status: "Pending",
  };
  const [dataSubmit, setDataSubmit] = useState({
    ...dataForm,
  });
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);

  const handleChange = (event) => {
    setDataSubmit({
      ...dataSubmit,
      [event.target.name]: event.target.value,
    });
    // console.log(dataSubmit);
  };

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8081/v1/api/admin/approval/post", dataSubmit, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log("Post Success, Status Code", res.status);
        console.log(res.data.data);
        setAlertSuccess(true);
        setAlertFail(false);
        setDataSubmit({
          ...dataForm,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlertFail(true);
        setAlertSuccess(false);
      });
  };

  return (
    <Container sx={{ width: "60rem" }} marginTop={5}>
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
          <Link to={`/dashboard/user/summary`} style={linkStyle}>
            {" "}
            Back to Dashboard
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
          <Link to={`/dashboard/user/summary`} style={linkStyle}>
            {" "}
            Back to Dashboard
          </Link>
        </Alert>
      </Collapse>
      <Box
        padding={3}
        margin={2}
        marginLeft={5}
        marginRight={5}
        sx={{
          minWidth: "50vw",
          boxShadow: "0 1rem 1rem  rgba(0,0,0,0.2)",
          backgroundColor: "rgba(214,249,200,255)",
        }}
      >
        <Typography sx={{ flex: "1 1 100%" }} variant="h3" mb={4}>
          Sick Leave Form
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          justify="flex-end"
          rowSpacing={1}
          // marginTop={2}
        >
          <TextField
            InputLabelProps={{
              style: { color: "black" },
            }}
            id="requestID"
            label="Request ID"
            autoComplete="cc-number"
            variant="outlined"
            name="id_request"
            value={dataSubmit.id_request}
            onChange={handleChange}
            sx={{ marginY: "0.5rem" }}
            fullWidth={true}
          />
          <TextField
            InputLabelProps={{
              style: { color: "black" },
            }}
            id="employeeID"
            label="Employee ID"
            autoComplete="cc-number"
            variant="outlined"
            name="id_employee"
            value={dataSubmit.id_employee}
            onChange={handleChange}
            sx={{ marginY: "0.5rem" }}
            fullWidth={true}
          />
          <TextField
            InputLabelProps={{
              style: { color: "black" },
            }}
            id="employeeName"
            label="Employee Name"
            autoComplete="cc-name"
            variant="outlined"
            type="text"
            name="full_name"
            value={dataSubmit.full_name}
            onChange={handleChange}
            sx={{ marginY: "0.5rem" }}
            fullWidth={true}
          />
          <TextField
            InputLabelProps={{
              style: { color: "black" },
            }}
            id="employeeDivision"
            label="Division"
            autoComplete="cc-exp"
            variant="outlined"
            sx={{ marginY: "0.5rem" }}
            fullWidth={true}
            type="text"
            name="division"
            value={dataSubmit.division}
            onChange={handleChange}
          />
          <TextField
            InputLabelProps={{
              style: { color: "black" },
            }}
            sx={{ marginY: "0.5rem" }}
            fullWidth={true}
            id="jobTitle"
            label="Job Title"
            type="text"
            autoComplete="cc-csc"
            variant="outlined"
            name="job_title"
            value={dataSubmit.job_title}
            onChange={handleChange}
          />
          <TextField
            InputLabelProps={{
              style: { color: "black" },
            }}
            sx={{ marginY: "0.5rem" }}
            fullWidth={true}
            id="reason"
            label="Reason of Leave"
            type="text"
            autoComplete="cc-csc"
            variant="outlined"
            name="description"
            value={dataSubmit.description}
            onChange={handleChange}
          />
          <TextField
            InputLabelProps={{
              style: { color: "black" },
            }}
            sx={{ marginY: "0.5rem" }}
            fullWidth={true}
            id="address"
            label="Address during Leave Period"
            type="text"
            autoComplete="cc-csc"
            variant="outlined"
            name="address"
            value={dataSubmit.address}
            onChange={handleChange}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            spacing={3}
            sx={{ marginY: "0.5rem" }}
          >
            <TextField
              helperText="Start Date"
              // sx={{marginY: '0.5rem'}}
              fullWidth={true}
              id="startdate"
              type="date"
              autoComplete="cc-csc"
              variant="outlined"
              name="start_date"
              value={dataSubmit.start_date}
              onChange={handleChange}
            />
            <TextField
              InputhelperTextProps={{ style: { color: "white" } }}
              helperText="Finish Date"
              // sx={{marginY: '0.5rem'}}
              fullWidth={true}
              id="finishdate"
              type="date"
              autoComplete="cc-csc"
              variant="outlined"
              name="end_date"
              value={dataSubmit.end_date}
              onChange={handleChange}
            />
          </Stack>
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
              <Link to="/dashboard/user/summary" style={linkStyle}>
                Batal
              </Link>
            </Button>
          </Stack>
        </Grid>
      </Box>
    </Container>
  );
}

export default SickReqForm;
