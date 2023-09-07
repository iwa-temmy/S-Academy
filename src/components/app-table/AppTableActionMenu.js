import React from 'react';
import { Menu } from '@mui/material';

const AppTableActionMenu = ({ anchor, children, closeMenu }) => {
    return (
        <Menu
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={closeMenu}
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '16px',
                    boxShadow: '4px 4px 8px rgba(175, 172, 172, 0.15), -4px -4px 8px rgba(175, 172, 172, 0.15)',
                },
            }}
        >
            {children}
        </Menu>
    );
};

export default AppTableActionMenu;
