import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Card, Box, Stack } from '@mui/material';

import { Link } from 'react-router-dom';

// core components
import AppTabsBar from './AppTabsBar';
import AppTab from './AppTab';
import { ErrorRounded, CheckCircleRounded } from '@mui/icons-material';

const TabLayout = (props) => {
    const theme = useTheme();
    const { children, onTabChange, tab: activeTab, tabs, tabAction, link, sx = {} } = props;
    const {
        container: containerStyles = {},
        paper: paperStyles = {},
        bar: barStyles = {},
        tab: tabStyles = {},
        panel: panelStyles = {},
    } = sx;

    const handleTabChange = (_, tab) => {
        onTabChange(tab);
    };

    const getIcon = (type) => {
        switch (type) {
            case 'error':
                return <ErrorRounded sx={{ color: theme.palette.tertiary[70] }} fontSize="small" />;
            case 'success':
                return <CheckCircleRounded sx={{ color: theme.palette.success[60] }} />;
            default:
                return null;
        }
    };
    return (
        <Container
            component={Card}
            maxWidth={false}
            elevation={0}
            sx={{
                p: '0 !important',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                backgroundColor: 'inherit',
                ...containerStyles,
            }}
        >
            <Box
                sx={{
                    backgroundColor: theme.palette.shades.white,
                    border: `1px solid ${theme.palette.gray[80]}7f`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ...paperStyles,
                    ...sx,
                }}
            >
                <AppTabsBar
                    value={activeTab}
                    onChange={handleTabChange}
                    sx={{
                        flex: 1,
                        ...barStyles,
                    }}
                    centered
                >
                    {tabs?.map((tab) => {
                        return (
                            <AppTab
                                label={tab.name}
                                id={tab.key}
                                key={tab.key}
                                disabled={tab?.disabled}
                                component={link ? Link : 'button'}
                                to={link && tab?.path}
                                icon={tab?.icon || getIcon(tab?.type)}
                                sx={tabStyles}
                                active={activeTab === tab?.id}
                            />
                        );
                    })}
                </AppTabsBar>
                {tabAction && <Box sx={{ mr: 3 }}>{tabAction}</Box>}
            </Box>
            <Stack sx={{ flex: 1, backgroundColor: 'inherit', ...panelStyles }}>{children}</Stack>
        </Container>
    );
};

export default TabLayout;
