import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
// import { Box } from '@mui/system';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { SalaryData } from "../../../fakeDb/dataDetail";
import { DataGrid } from "@mui/x-data-grid";
import { DataPayroll } from "../../../fakeDb/dataGridPayroll";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const approvalItems = [
  {
    title: "Leave Request",
    today: "Today",
    countToday: "2",
    week: "This Week",
    countWeek: "5",
    month: "This Month",
    countMonth: "10",
  },
  {
    title: "Leave Permit",
    today: "Today",
    countToday: "2",
    week: "This Week",
    countWeek: "5",
    month: "This Month",
    countMonth: "10",
  },
  {
    title: "Leave Sick",
    today: "Today",
    countToday: "2",
    week: "This Week",
    countWeek: "5",
    month: "This Month",
    countMonth: "10",
  },
];

const row = SalaryData.map((row) => {
  return {
    id: row.employeeId,
    paymentId: row.paymentId,
    name: row.name,
    paymentDate: row.paymentDate,
    totalSalary: row.totalSalary,
    paymentStatus: row.paymentStatus,
  };
});

function AdminSummary() {
  return (
    <Container mx={5}>
      <Box pb={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
          mb={3}
        >
          <Grid item xs={12} sm>
            <Typography variant="h5" sx={{ mb: { xs: 1, sm: 0 } }}>
              Leave Request Today
            </Typography>
          </Grid>
          <Grid item xs={12} sm sx={{ textAlign: { xs: "start", sm: "end" } }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ChevronRightIcon />}
              sx={{ color: "white" }}
            >
              <Link to="/dashboard/admiin/approval-panel" style={linkStyle}>
                <Typography variant="button">View All</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          sx={{ flexWrap: "wrap" }}
        >
          {approvalItems.map((item, index) => (
            <Paper
              elevation={6}
              key={index}
              sx={{
                minWidth: { xs: "100%", sm: "40%", md: "28%" },
                my: { xs: 2, sm: 1, md: 0 },
              }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" mb={2}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "3rem" }}>
                    {item.countToday}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          ))}
        </Stack>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
          mb={3}
        >
          <Grid item xs={12} sm>
            <Typography variant="h5" sx={{ mb: { xs: 1, sm: 0 } }}>
              Payroll Panel
            </Typography>
          </Grid>
          <Grid item xs={12} sm sx={{ textAlign: { xs: "start", sm: "end" } }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ChevronRightIcon />}
              sx={{ color: "white" }}
            >
              <Link to="/dashboard/admin/payroll-panel" style={linkStyle}>
                <Typography variant="button">View All</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <DataGrid
        rows={row}
        columns={DataPayroll.columns}
        pageSize={5}
        rowCount={5}
        autoHeight={true}
        autoPageSize={true}
        hideFooterPagination={true}
        sx={{
          backgroundColor: "white",
          boxShadow: "0 1rem 1rem  rgba(0,0,0,0.2)",
        }}
      />
    </Container>
  );
}

export default AdminSummary;
