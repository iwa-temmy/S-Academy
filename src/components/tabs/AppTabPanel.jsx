import React from 'react';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

const AppTabPanel = (props) => {
    const { children, value, index, sx, ...other } = props;

    return (
        <Stack
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{ flex: 1, height: '100%', ...sx }}
            {...other}
        >
            {value === index && <Stack sx={{ flex: 1 }}>{children}</Stack>}
        </Stack>
    );
};

AppTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default AppTabPanel;
