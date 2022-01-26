import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

function SalaryPaymentForm() {
  return (
    <Container marginTop={5}>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <Typography variant="h4">Form Input Karyawan Baru</Typography>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField label="Nama Lengkap" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Posisi" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Salary" fullWidth required />
            </Grid>
            <Grid xs={12} item mt={2}>
              <Button
                style={{ marginRight: "10px" }}
                type="submit"
                variant="contained"
                sx={{ color: "white" }}
              >
                <Link to="/dashboard/admin/payroll-panel" style={linkStyle}>
                  Submit
                </Link>
              </Button>
              <Button color="error" variant="contained">
                <Link to="/dashboard/admin/payroll-panel" style={linkStyle}>
                  Batal
                </Link>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SalaryPaymentForm;
