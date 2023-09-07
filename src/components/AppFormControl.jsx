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
  } = props;
  return (
    <FormControl
      fullWidth={fullWidth}
      sx={{ width: fullWidth ? "fit-content" : "100%", ...sx }}
    >
      {children}
    </FormControl>
  );
};

export default AppFormControl;
