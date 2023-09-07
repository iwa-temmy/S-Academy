import { useTheme } from '@mui/material/styles';
import { CircularProgress, Box } from '@mui/material';

const LoadingState = ({ size = 40 }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <CircularProgress sx={{ color: theme.palette.gray[400], transition: 'color .5s' }} size={size} />
        </Box>
    );
};

export default LoadingState;
