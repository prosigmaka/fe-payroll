import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.common.neutral_white_medium2,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.common.neutral_white_medium3,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
  },
}));

export const Status = styled("span")((props) => ({
  backgroundColor:
    props.status === "Paid"
      ? props.theme.palette.common.success
      : props.theme.palette.common.pending,
  color: "white",
  padding: ".5rem",
  fontSize: ".8rem",
  fontWeight: "600",
  borderRadius: ".5rem",
}));
