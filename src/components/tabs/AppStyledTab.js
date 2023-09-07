import React, { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';

import AppTab from './AppTab';

const AppStyledTab = forwardRef((props, ref) => {
    const { tabVariant } = props;
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
                transitionProperty: 'color, background-color',
                transitionDuration: '0.8s',
                borderBottom: tabVariant === 'outlined' ? `4px solid transparent` : '',
                ...props.sx,
            }}
            ref={ref}
        />
    );
});

export default AppStyledTab;
