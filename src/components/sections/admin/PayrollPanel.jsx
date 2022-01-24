import * as React from "react";
import {
  DataGrid,
  // GridActionsCellItem,
  gridClasses,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SalaryData } from "../../../fakeDb/dataDetail";

const columns = [
  { field: "id", headerName: "Employee ID", width: 180, type: "number" },
  {
    field: "paymentId",
    headerName: "Payment ID",
    width: 180,
    type: "number",
  },
  { field: "name", headerName: "Name", width: 250, type: "string" },
  {
    field: "paymentDate",
    headerName: "Date",
    width: 180,
    type: "date",
    editable: true,
  },
  {
    field: "totalSalary",
    headerName: "Amount",
    width: 200,
    type: "number",
    editable: true,
  },
  {
    field: "paymentStatus",
    headerName: "Status",
    width: 150,
    type: "string",
    editable: true,
  },
  // {
  //   field: "link",
  //   headerName: "Link",
  //   hide: true,
  // },
  // {
  //   field: "actions",
  //   type: "actions",
  //   width: 80,
  //   getActions: (item) => [
  //     <GridActionsCellItem
  //       //   icon={<FileCopyIcon />}
  //       label="Details"
  //       onClick={() => {
  //         window.open("/salary-slip", "_blank");
  //       }}
  //       showInMenu
  //     />,
  //   ],
  // },
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
          maxHeight: 500,
          width: "100%",
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={row}
          columns={columns}
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
