import { useTheme } from '@mui/material';
import AppSelect from '../AppOldSelect';

const AppFilterSelect = (props) => {
    const { sx, menuProps, ...otherProps } = props;
    const theme = useTheme();
    return (
        <AppSelect
            sx={{
                height: 30,
                borderRadius: 2,
                width: 'fit-content',
                minWidth: 80,
                fontSize: 12,
                borderColor: theme.palette.neutral[70] + '7f',
                color: theme.palette.neutral[40],
                '& .MuiSelect-select': {
                    px: 1,
                    py: 0.75,
                },
                '& .MuiSelect-icon': {
                    fontSize: 16,
                },
                ...sx,
            }}
            MenuProps={{
                anchorOrigin: { horizontal: 'left' },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                },
                PaperProps: {
                    sx: {
                        minHeight: '100px',
                        minWidth: '200px',
                        '& .MuiMenuItem-root': {
                            px: 1,
                            py: 0.2,
                        },
                    },
                },
                ...menuProps,
            }}
            {...otherProps}
        />
    );
};

export default AppFilterSelect;
