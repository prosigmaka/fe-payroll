import { GridActionsCellItem } from "@mui/x-data-grid";

export const DataPayroll = {
  columns: [
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
    {
      field: "link",
      headerName: "Link",
      hide: true,
    },
    {
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (item) => [
        <GridActionsCellItem
          //   icon={<FileCopyIcon />}
          label="Details"
          onClick={() => {
            window.open("/dashboard/admin/review-salary", "_blank");
          }}
          showInMenu
        />,
      ],
    },
  ],
};
