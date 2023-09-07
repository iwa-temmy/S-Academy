import React from 'react';
import { Tab, useTheme } from '@mui/material';

const AppTab = (props) => {
    const { id, sx, iconPosition = 'end', icon, selected, active, ...otherProps } = props;
    const theme = useTheme();

    // functions
    const getId = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    return (
        <Tab
            {...otherProps}
            {...getId(id)}
            sx={{
                '&, &:hover': {
                    textDecoration: 'unset',
                    color: selected ? theme.palette.primary[20] : theme.palette.neutral[60],
                },
                minHeight: 55,
                textTransform: 'unset',
                fontWeight: 700,
                fontSize: 16,
                p: 0,
                mx: 2,
                ...sx,
            }}
            icon={icon}
            iconPosition={iconPosition}
            className={active ? 'active' : ''}
        />
    );
};

export default AppTab;
