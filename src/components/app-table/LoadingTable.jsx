import { TableCell, TableRow } from "@mui/material";
import LoadingState from "../LoadingState";

const LoadingTable = () => {
  return (
    <TableRow sx={{ height: "100%" }}>
      <TableCell colSpan={"100%"} sx={{ border: 0, height: "100%" }}>
        <LoadingState />
      </TableCell>
    </TableRow>
  );
};

export default LoadingTable;
