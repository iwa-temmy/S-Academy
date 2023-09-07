import { Tabs } from '@mui/material';

const AppTabsBar = (props) => {
    const { currentTab, handleTabChange, sx, children, ...otherProps } = props;
    return (
        <Tabs
            value={currentTab}
            onChange={handleTabChange}
            sx={{
                '& .MuiTabs-indicator': {
                    height: 3,
                },
                ...sx,
            }}
            {...otherProps}
        >
            {children}
        </Tabs>
    );
};

export default AppTabsBar;
