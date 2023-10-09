import React from 'react';
import { Tooltip, Box, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';
import { useTheme } from '@mui/styles';

const FormTooltip = ({ placement, text }) => {
    const theme = useTheme();
    return (
        <Tooltip
            title={
                <Box sx={{ p: '1px' }}>
                    <Typography sx={{ fontWeight: 400, fontSize: '12px' }}>{text}</Typography>
                </Box>
            }
            arrow
            placement={placement}
            PopperProps={{
                sx: {
                    '& .MuiTooltip-arrow': {
                        color: '#0E2C66',
                    },
                    '& .MuiTooltip-tooltip': {
                        backgroundColor: '#0E2C66',
                        color: theme.palette.white.main,
                        p: 1,
                        borderRadius: '8px',
                    },
                },
            }}
        >
            <Info sx={{ fontSize: 12, color: theme.palette.gray[500], ml: 1 }} />
        </Tooltip>
    );
};

export default FormTooltip;
