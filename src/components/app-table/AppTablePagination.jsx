import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Pagination, PaginationItem } from '@mui/material';

// core component
import TableEndDivider from './TableEndDivider';
import { getNoOfPages } from './utils';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';

const AppTablePagination = (props) => {
    const { page, onPageChange, dataLength, noPerPage } = props;
    const theme = useTheme();

    const noOfPages = useMemo(() => getNoOfPages(dataLength, noPerPage), [noPerPage, dataLength]);
    return (
        <Stack sx={{ mt: 3, mb: 1, gap: 2 }} direction="row" alignItems="center" justifyContent="flex-end">
            <TableEndDivider />
            <Pagination
                count={noOfPages || 0}
                page={page}
                shape="rounded"
                color="primary"
                onChange={(_, page) => onPageChange(page)}
                renderItem={(item) => {
                    const isActive = item.page === page;
                    const isNav = item.type !== 'page';
                    return (
                        <PaginationItem
                            {...item}
                            slots={{ previous: KeyboardDoubleArrowLeft, next: KeyboardDoubleArrowRight }}
                            sx={{
                                border: isActive || isNav ? 'none' : '1px solid',
                                color: isActive
                                    ? theme.palette.shades.white
                                    : isNav
                                    ? theme.palette.neutral[40]
                                    : theme.palette.neutral[30],
                                borderColor: theme.palette.neutral[80] + '7f',
                                borderRadius: 2,
                                fontSize: isNav ? 14 : 12,
                                fontWeight: 500,
                                width: 29,
                                height: 26,
                            }}
                        />
                    );
                }}
            />
        </Stack>
    );
};

export default AppTablePagination;
