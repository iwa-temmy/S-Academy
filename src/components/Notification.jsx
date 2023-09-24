import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { CheckCircle, Cancel, Error, Info, Close } from '@mui/icons-material';

const Notification = (props) => {
    const theme = useTheme();
    const { title, description, closeToast, toastProps } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100px',
                width: '429px',
                backgroundColor: theme.palette.shades.white,
            }}
        >
            <Box
                sx={{
                    backgroundColor: `${
                        toastProps?.type === 'success'
                            ? theme.palette.success[60]
                            : toastProps?.type === 'error'
                            ? theme.palette.error[50]
                            : toastProps?.type === 'warning'
                            ? theme.palette.tertiary[70]
                            : toastProps?.type === 'info'
                            ? theme.palette.primary[30]
                            : null
                    }`,
                    width: '10px',
                }}
            />
            <Box sx={{ pl: '22px', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    {toastProps?.type === 'success' ? (
                        <CheckCircle sx={{ color: theme.palette.success[60], fontSize: 42 }} />
                    ) : toastProps?.type === 'error' ? (
                        <Cancel sx={{ color: theme.palette.error[50], fontSize: 42 }} />
                    ) : toastProps?.type === 'warning' ? (
                        <Error sx={{ color: theme.palette.tertiary[70], fontSize: 42 }} />
                    ) : toastProps?.type === 'info' ? (
                        <Info sx={{ color: theme.palette.primary[30], fontSize: 42 }} />
                    ) : null}

                    <Stack sx={{ pl: '16px' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '18px', color: theme.palette.neutral[20] }}>
                            {title}
                        </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '12px', color: theme.palette.neutral[40] }}>
                            {description}
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ p: '12px', display: 'flex', alignSelf: 'flex-start' }}>
                    <Close sx={{ color: theme.palette.neutral[50] }} fontSize="small" onClick={closeToast} />
                </Box>
            </Box>
        </Box>
    );
};

export default Notification;
