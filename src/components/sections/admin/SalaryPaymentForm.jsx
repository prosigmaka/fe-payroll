import React from "react";
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";

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
            <Grid xs={12} item>
              <Button style={{ marginRight: "10px" }} type="submit" variant="contained">
                Submit
              </Button>
              <Button color="error" variant="contained">
                Batal
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SalaryPaymentForm;
