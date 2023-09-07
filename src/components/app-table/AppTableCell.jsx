// import { useTheme } from '@mui/material/styles';
import { TableCell } from '@mui/material';

const AppTableCell = (props) => {
    // const theme = useTheme();
    const { children, align = 'left', sx } = props;
    return (
        <TableCell
            sx={{
                border: 'none',
                fontSize: 13,
                fontWeight: 500,
                p: 1.5,
                ...sx,
            }}
            align={align}
        >
            {children}
        </TableCell>
    );
};

export default AppTableCell;
