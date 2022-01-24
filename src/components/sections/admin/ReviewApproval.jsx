import { Button, ButtonGroup, Paper, Typography } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { Table } from "@mui/material";
import { TableFooter } from "@mui/material";





const ReviewApproval = (props) => {
  const employeename = "Nia";
  const employeeID = "ID001";
  const division = "Human Resource";
  const jobTitle = "HR";
  const reasonLeaving = "Sakit";
  const addressLeaving = "Jalan Sesama, Jakarta Selatan";
  const startDateLeaving = "01-01-2022";
  const endDateLeaving = "31-12-2022";

  return (
    <>
      <Typography sx={{ flex: '1 1 100%' }} variant="h3" marginBottom={3}>
        Request Review
      </Typography>
      <Paper margin={2} elevation={3}  sx={{ boxShadow: '0 1rem 1rem  rgba(0,0,0,0.2)', backgroundColor: 'rgba(214,249,200,255)' }}>

        <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(214,249,200,255)' }}>
          <Table aria-label="custom pagination table">
            <TableBody >
              <TableRow>
                <TableCell component="th" scope="row">
                  {"Employee ID"}
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {employeeID}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {"Employee Name"}
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {employeename}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {"Job Title"}
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {jobTitle}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {"Division"}
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {division}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={100} component="th" scope="row">
                  {"Reason of Leaving"}
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {reasonLeaving}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {"Address during Leaving"}
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {addressLeaving}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {"Leave Period"}
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {startDateLeaving} to {endDateLeaving}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography align="center">
            <ButtonGroup>
              <Button
                color='primary'
                sx={{ color: 'black' }}
              >
                Accept
              </Button>
              <Button
                color='primary'
                sx={{ color: 'black' }}
              >
                Reject
              </Button>
            </ButtonGroup>
          </Typography>
        </TableContainer>
      </Paper>
    </>
  )
};

export default ReviewApproval;
