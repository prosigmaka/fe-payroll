import React from "react";
//import { useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import { TableRow } from "@mui/material";
import { Button } from "@mui/material";
import Container from '@mui/material/Container';

//import BasicDateRangePicker from './uidate';





const PermissionReqForm = (props) => {

    /*const [employeeID, setEmployeeID] = useState("");
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



        const data = { employeeID, employeeName, employeeDivision, jobTitle, reason, file};


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
        else{
            alert("Silakan isi seluruh data")
        }

        

    }*/


    return (


        <Container sx={{ width: '60rem' }} marginTop={5} >
            <Typography sx={{ flex: '1 1 100%' }} variant="h3" >
                Permission Form
            </Typography>
            <Box

                padding={2}
                margin={2}
                marginLeft={5}
                marginRight={5}


                sx={{ minWidth: 650, boxShadow: '0 1rem 1rem  rgba(0,0,0,0.2)', backgroundColor: 'rgba(214,249,200,255)' }}>

                <Typography sx={{ flex: '1 1 100%' }} variant="h8" >
                    Please fill the form correctly

                </Typography>


          
                <Grid

                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    justify="flex-end"
                    rowSpacing={1}
                    marginTop={2}
                >


                    <TextField

                        InputLabelProps={{
                            style: { color: 'black' }
                        }}
                        id="employeeID"
                        label="Employee ID"
                        autoComplete="cc-name"
                        variant="outlined"
                        type="text"
                        sx={{ m: 1, width: '57.5ch', colorBackground: 'rgba(58,135,128,255)' }}

                    /*value={employeeID}
                    onChange={handleEmployeeID}*/
                    />

                    <TextField
                        InputLabelProps={{
                            style: { color: 'black' }
                        }}
                        id="employeeName"
                        label="Employee Name"
                        autoComplete="cc-number"
                        variant="outlined"
                        type="text"
                        sx={{ m: 1, width: '57.5ch' }}
                    /*value={employeeName}
                    onChange={handleEmployeeName}*/
                    />

                    <TextField
                        InputLabelProps={{
                            style: { color: 'black' }
                        }}
                        id="employeeDivision"
                        label="Division"
                        autoComplete="cc-exp"
                        variant="outlined"
                        sx={{ m: 1, width: '57.5ch' }}
                        type="text"
                    /*value={employeeDivision}
                    onChange={handleEmployeeDivision}*/
                    />

                    <TextField
                        InputLabelProps={{
                            style: { color: 'black' }
                        }}
                        sx={{ m: 1, width: '57.5ch' }}
                        id="jobTitle"
                        label="Job Title"
                        type="text"
                        autoComplete="cc-csc"
                        variant="outlined"
                    /*value={jobTitle}
                    onChange={handleJobTitle}*/
                    />

                    <TextField
                        InputLabelProps={{
                            style: { color: 'black' }
                        }}
                        sx={{ m: 1, width: '57.5ch' }}
                        id="reason"
                        label="Reason of Leave"
                        type="text"
                        autoComplete="cc-csc"
                        variant="outlined"
                    /*value={jobTitle}
                    onChange={handleJobTitle}*/
                    />

                    <TextField
                        InputLabelProps={{
                            style: { color: 'black' }
                        }}
                        sx={{ m: 1, width: '57.5ch' }}
                        id="address"
                        label="Address during Leave Period"
                        type="text"
                        autoComplete="cc-csc"
                        variant="outlined"
                    /*value={jobTitle}
                    onChange={handleJobTitle}*/
                    />


                    <TableRow>
                        <TextField


                            helperText="Start Date"
                            sx={{ m: 1, width: '28ch' }}
                            id="startdate"
                            type="date"
                            autoComplete="cc-csc"
                            variant="outlined"
                        /*onChange={handleFile}*/
                        />
                        <TextField InputhelperTextProps={{ style: { color: 'white' } }}


                            helperText="Finish Date"
                            sx={{ m: 1, width: '28ch' }}
                            id="finishdate"
                            type="date"
                            autoComplete="cc-csc"
                            variant="outlined"
                        /*onChange={handleFile}*/
                        />

                    </TableRow>

                    <Button
                        type="submit" /*onClick={handlingSubmit}*/ variant="outlined" color="primary" size="large" sx={{ color: 'black' }}>Submit
                    </Button>

                </Grid>

            </Box>

        </Container>

    );


}

export default PermissionReqForm;
