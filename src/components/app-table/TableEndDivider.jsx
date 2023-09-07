import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const TableEndDivider = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flex: 1,
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    borderTop: '1px solid',
                    borderColor: theme.palette.neutral[80] + '7f',
                }}
            />
            <Typography
                component="small"
                sx={{
                    color: theme.palette.neutral[60],
                    textTransform: 'uppercase',
                    pl: 0.5,
                    fontSize: 12,
                    fontWeight: 400,
                }}
            >
                End of list
            </Typography>
        </Box>
    );
};

export default TableEndDivider;
