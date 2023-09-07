import { useTheme } from '@mui/material/styles';
import { TableRow } from '@mui/material';

// core components
import AppTableCell from './AppTableCell';

const AppTableRow = (props) => {
    const theme = useTheme();
    const { columns, row, clickableRow, onRowClick } = props;
    return (
        <TableRow
            sx={{
                backgroundColor: theme.palette.shades.white,
                cursor: clickableRow && clickableRow() ? 'pointer' : 'default',
            }}
            onClick={clickableRow && clickableRow() ? onRowClick : null}
        >
            {columns.map((column, index) => {
                return (
                    <AppTableCell
                        key={column?.title + row?.id + index}
                        sx={{
                            color: theme.palette.gray[50],
                            borderBottom: `0.3px solid ${theme.palette.neutral[70]}2f`,
                        }}
                        align={column.align}
                    >
                        {column.render(row)}
                    </AppTableCell>
                );
            })}
        </TableRow>
    );
};

export default AppTableRow;
