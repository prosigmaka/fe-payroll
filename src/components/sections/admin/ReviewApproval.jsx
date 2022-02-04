import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

const ReviewApproval = (props) => {
  const [dataApproval, setDataApproval] = useState([]);
  const [dataApprovalUpdate, setDataApprovalUpdate] = useState({
    ...dataApproval,
  });

  const url_path = window.location.pathname.split("/");
  const approvalId = url_path[url_path.length - 1];

  const approvalDetail = async () =>
    await axios
      .get(`http://localhost:8081/v1/api/admin/approval/detail/${approvalId}`)
      .then((res) => {
        setDataApproval(res.data.data);
        setDataApprovalUpdate(res.data.data);
        // console.log(res.data.data);
      });

  const approvalUpdate = () =>
    axios
      .put(
        `http://localhost:8081/v1/api/admin/approval/update/${approvalId}`,
        { ...dataApprovalUpdate },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        // setDataApprovalUpdate(res.data.data);
        console.log(res.data.data);
        setDataApproval({ ...dataApprovalUpdate });
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    approvalDetail();
    // approvalUpdate();
    // eslint-disable-next-line
  }, []);

  const handleChangeApproved = () => {
    setDataApprovalUpdate({
      ...dataApproval,
      approval_status: "Approved",
    });
    // console.log(dataSubmit);
  };

  const handleChangeRejected = () => {
    setDataApprovalUpdate({
      ...dataApproval,
      approval_status: "Rejected",
    });
    // console.log(dataSubmit);
  };

  // console.log(dataApproval);

  const startDate = moment(dataApproval.start_date).format("D MMMM YYYY");

  const endDate = moment(dataApproval.end_date).format("D MMMM YYYY");

  return (
    <Paper
      margin={2}
      elevation={3}
      sx={{
        boxShadow: "0 1rem 1rem  rgba(0,0,0,0.2)",
        backgroundColor: "rgba(214,249,200,255)",
        paddingY: "1rem",
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h3"
        marginBottom={2}
        marginTop={2}
        align="center"
      >
        Request Review
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "rgba(214,249,200,255)",
          boxShadow: "none",
        }}
      >
        <Table aria-label="custom pagination table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Employee ID
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {dataApproval.id_employee}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Employee Name
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {dataApproval.full_name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Job Title
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {dataApproval.job_title}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Division
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {dataApproval.division}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={100} component="th" scope="row">
                Reason of Leaving
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {dataApproval.description}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Address during Leaving
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {dataApproval.address}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Leave Period
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {/* {moment(dataApproval.start_date).format("D MMMM YYYY")} */}
                {startDate}
                <span style={{ margin: "0 0.5rem" }}>to</span>
                {/* {moment(dataApproval.end_date).format("D MMMM YYYY")} */}
                {endDate}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography
          align="center"
          // sx={{
          //   display:
          //     dataApproval.approval_status === "Pending" ? "block" : "none",
          // }}
        >
          <Stack spacing={2} justifyContent="center" direction="row">
            <Button
              color="success"
              variant="contained"
              // onClick={handleChangeApproved}
              onChange={handleChangeApproved}
              onClick={approvalUpdate}
              sx={{
                color: "white",
                display:
                  dataApproval.approval_status === "Rejected"
                    ? "block"
                    : dataApproval.approval_status === "Pending"
                    ? "block"
                    : "none",
              }}
            >
              Accept
            </Button>
            <Button
              color="error"
              variant="contained"
              // onClick={handleChangeRejected}
              onChange={handleChangeRejected}
              onClick={approvalUpdate}
              sx={{
                color: "white",
                display:
                  dataApproval.approval_status === "Approved"
                    ? "block"
                    : dataApproval.approval_status === "Pending"
                    ? "block"
                    : "none",
              }}
            >
              Reject
            </Button>
          </Stack>
        </Typography>
      </TableContainer>
    </Paper>
  );
};

export default ReviewApproval;
