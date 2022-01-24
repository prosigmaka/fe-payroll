import * as React from "react";
import {
  DataGrid,
  gridClasses,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SalaryData } from "../../../fakeDb/dataDetail";
import { DataPayroll } from "../../../fakeDb/dataGridPayroll";

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

function PayrollPanel(props) {
  const [pageSize, setPageSize] = React.useState(25);
  // const [rows, setRows] = React.useState(() => row);

  //   const handleAddRow = () => {
  //     setRows((prevRows) => [...prevRows, row]);
  //   };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer
        className={gridClasses.toolbarContainer}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: "1rem",
          my: "1rem",
        }}
      >
        <GridToolbarExport sx={{ color: "#54C2B7" }} />
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          //   onClick={handleAddRow}
          sx={{ color: "white", backgroundColor: "#54C2B7" }}
        >
          New Payroll
        </Button>
      </GridToolbarContainer>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <div
        style={{
          maxHeight: "100%",
          width: "100%",
          margin: "auto",
          overflow: "auto",
        }}
      >
        <DataGrid
          rows={row}
          columns={DataPayroll.columns}
          pageSize={pageSize}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          autoHeight={true}
          autoPageSize={true}
          pagination={true}
          components={{
            Toolbar: CustomToolbar,
          }}
          sx={{
            backgroundColor: "white",
            boxShadow: "0 1rem 1rem  rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </Box>
  );
}

export default PayrollPanel;
