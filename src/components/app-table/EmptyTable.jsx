import { TableCell, TableRow } from "@mui/material";
import EmptyState from "../EmptyState";

const EmptyTable = (props) => {
  const { description } = props;
  return (
    <TableRow>
      <TableCell colSpan={"100%"} sx={{ border: 0 }}>
        <EmptyState description={description} />
      </TableCell>
    </TableRow>
  );
};

export default EmptyTable;
