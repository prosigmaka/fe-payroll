import React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import { TableRow } from "@mui/material";
import { Button } from "@mui/material";
import { Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { RadioGroup } from "@mui/material";
import BasicDateRangePicker from './uidate';

const LeaveReqForm = (props) => {
  const [employeeID, setEmployeeID] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeDivision, setEmployeeDivision] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [file, setFile] = useState("");
  const [reason, setReason] = useState("");
  const [list, setList] = useState([]);

  const handleRadioChange = (e) => {
    setReason(e.target.value);
    console.log(reason);
  };

  const handleEmployeeID = (e) => {
    setEmployeeID(e.target.value);
  };

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleEmployeeDivision = (e) => {
    setEmployeeDivision(e.target.value);
  };

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };


  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    console.log(file);
    e.preventDefault();
  }

  const handlingSubmit = (e) => {



    const data = { employeeID, employeeName, employeeDivision, jobTitle, reason, file };


    if (employeeID && employeeName && employeeDivision && jobTitle && reason && file) {
      setList((ls) => [...ls, data])
      setEmployeeID("")
      setEmployeeName("")
      setEmployeeDivision("")
      setJobTitle("")
      setReason("")
      setFile("")
      console.log(list);

    }
    else {
      alert("Silakan isi seluruh data")
    }



  }


  return (

    <>


      <Box

        padding={2}
        margin={2}
        marginLeft={5}
        marginRight={5}
        boxShadow={3}>


        <Typography
          variant="h6" gutterBottom
          letterSpacing={1}>
          Leave Form
        </Typography>

        <Grid

          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          justify="flex-end"
          rowSpacing={0.5}>


          <TextField


            id="employeeID"
            label="Employee ID"
            autoComplete="cc-name"
            variant="outlined"
            type="text"
            sx={{ m: 1, width: '57ch' }}
            value={employeeID}
            onChange={handleEmployeeID}
          />

          <TextField

            id="employeeName"
            label="Employee Name"
            autoComplete="cc-number"
            variant="outlined"
            type="text"
            sx={{ m: 1, width: '57ch' }}
            value={employeeName}
            onChange={handleEmployeeName}
          />

          <TextField

            id="employeeDivision"
            label="Division"
            autoComplete="cc-exp"
            variant="outlined"
            sx={{ m: 1, width: '57ch' }}
            type="text"
            value={employeeDivision}
            onChange={handleEmployeeDivision}
          />

          <TextField

            sx={{ m: 1, width: '57ch' }}
            id="jobTitle"
            label="Job Title"
            type="text"
            autoComplete="cc-csc"
            variant="outlined"
            value={jobTitle}
            onChange={handleJobTitle}
          />
          <TableRow>
            <BasicDateRangePicker
            />
          </TableRow>

          <TextField
            helperText="Upload File"
            sx={{ m: 1, width: '57ch' }}
            id="file"
            type="file"
            autoComplete="cc-csc"
            variant="outlined"
            onChange={handleFile}
          />
        </Grid>
        <Grid>
          <FormControl>
            <FormLabel>Leave Type </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel value="Izin" control={
                <Radio
                  checked={reason === "Izin"}
                  onChange={handleRadioChange}
                />} label="Izin" />
              <FormControlLabel value="Sakit" control={
                <Radio
                  checked={reason === "Sakit"}
                  onChange={handleRadioChange}
                />} label="Sakit" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit" onClick={handlingSubmit} variant="outlined" color="primary" size="large">Submit
          </Button>
        </Grid>

      </Box>

    </>

  );
};

export default LeaveReqForm;
