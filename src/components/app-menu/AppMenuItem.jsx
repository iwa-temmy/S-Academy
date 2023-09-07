import { ListItemIcon, MenuItem, useTheme } from '@mui/material';

const AppMenuItem = (props) => {
    const { label, icon, sx, ...otherProps } = props;
    const theme = useTheme();
    return (
        <MenuItem sx={{ fontWeight: 400, fontSize: 14, color: theme.palette.neutral[50], ...sx }} {...otherProps}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            {label}
        </MenuItem>
    );
};

export default AppMenuItem;
