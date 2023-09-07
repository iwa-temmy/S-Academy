import React from 'react';
import { useTheme } from '@mui/material/styles';

import AppTab from './AppTab';

const AppTabStyled = (props) => {
    const theme = useTheme();
    return (
        <AppTab
            {...props}
            sx={{
                color: theme.palette.primary[900],
                textTransform: 'unset',
                fontWeight: 600,
                borderRadius: '8px 8px  0 0',
                py: 2.1,
                px: 2.5,
                fontSize: '13px',
                whiteSpace: 'inherit !important',
                transitionProperty: 'color, background-color',
                transitionDuration: '0.8s',
                '&.Mui-selected': {
                    backgroundColor: theme.palette.primary[900],
                    color: theme.palette.white.main,
                },
            }}
        />
    );
};

export default AppTabStyled;
