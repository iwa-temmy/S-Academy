// import { useTheme } from '@mui/material/styles';
import {
  // Box,
  FormControl,
} from "@mui/material";

const AppFormControl = (props) => {
  // const theme = useTheme();
  const {
    children,
    //  label, name, error, disabled, labelStyle,
    sx = {},
    fullWidth,
    variant,
  } = props;
  console.log({ fullWidth });
  return (
    <FormControl
      variant={variant}
      fullWidth={fullWidth}
      sx={{ width: fullWidth ? "100%" : "fit-content", ...sx }}
    >
      {/* {label && (
                <Box
                    component="label"
                    htmlFor={name}
                    sx={{
                        color: error
                            ? theme.palette.error[700]
                            : disabled
                            ? theme.palette.gray[300]
                            : theme.palette.gray[900],
                        mb: 0.5,
                        fontSize: 14,
                        ...labelStyle,
                    }}
                >
                    {label}
                </Box>
            )} */}
      {children}
    </FormControl>
  );
};

export default AppFormControl;
