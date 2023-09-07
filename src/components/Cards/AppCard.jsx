import React from 'react';

import { Card, useTheme } from '@mui/material';

const AppCard = (props) => {
    const { sx, children } = props;
    const theme = useTheme();
    return (
        <Card
            sx={{
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.05)',
                border: `1px solid ${theme.palette.gray[90]}66`,
                borderRadius: 2,
                backgroundColor: theme.palette.shades.white,
                ...sx,
            }}
        >
            {children}
        </Card>
    );
};

export default AppCard;
