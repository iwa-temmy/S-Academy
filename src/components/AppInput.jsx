import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  InputAdornment,
  IconButton,
  Box,
  TextField,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import AppFormControl from "./AppFormControl";
// import FormTooltip from "./new_components/FormTooltip";

const AppInput = ({
  label,
  type,
  name,
  onChange,
  value,
  error,
  disabled,
  sx = {},
  multiline,
  labelStyle,
  adornment,
  // toolTip,
  // tips,
  controlStyle = {},
  small,
  medium,
  large,
  extraLarge,
  variant,
  ...restProps
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const [passwordType, setPasswordType] = useState("password");
  const toggleShowPassword = () =>
    setPasswordType((current) =>
      current === "password" ? "text" : "password"
    );

  // Input Height Variant
  const heightValue = small || medium || large || extraLarge;

  let height;
  switch (heightValue) {
    case small:
      height = "38px";
      break;
    case medium:
      height = "48px";
      break;
    case large:
      height = "56px";
      break;
    case extraLarge:
      height = "64px";
  }

  return (
    <AppFormControl
      name={name}
      label={
        <>
          {variant === "filled" ? null : label}
          {/* {toolTip && <FormTooltip placement="top" text={tips} />} */}
        </>
      }
      error={error}
      disabled={disabled}
      labelStyle={labelStyle}
      sx={controlStyle}
    >
      <Box>
        {variant === "filled" ? (
          <TextField
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            label={
              <Typography
                sx={{ color: "#8F9099", transition: "0.2s ease out" }}
              >
                {label}
              </Typography>
            }
            variant={variant}
            fullWidth
            type={type === "password" ? passwordType : type}
            className={classes.underline}
            InputProps={{
              disableUnderline: true,
              endAdornment:
                type === "password" && value ? (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {passwordType === "password" ? (
                        <VisibilityOff
                          sx={{ color: theme.palette.gray[900] }}
                        />
                      ) : (
                        <Visibility sx={{ color: theme.palette.gray[900] }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ) : adornment ? (
                  adornment
                ) : (
                  ""
                ),
            }}
            {...restProps}
            sx={{
              height: multiline ? "unset" : height ? height : 40,
              border: `1px solid ${theme.palette.gray[90]}`,
              marginBottom: 1,
              borderRadius: "5px",
              color: "#8F9099",
              fontWeight: 500,
              textTransform: "capitalize !important",
              overflow: "hidden",
              fontSize: "14px",
              // paddingTop: variant === 'standard' ? '1rem' : null,
              "&.Mui-disabled": {
                borderColor: theme.palette.gray[100],
                backgroundColor: "#00000000",
              },
              "& fieldset": { border: "0 !important" },
              "&.MuiInputBase-input": {
                borderBottom: "none",
                backgroundColor: "red",
                paddingTop: 2.5,
              },
              "& .MuiFilledInput-input:before, & .MuiFilledInput-input:after": {
                borderBottom: "none !important",
              },
              "& .MuiFilledInput-root": {
                background: "#ffffff",
                "&:focus": {
                  background: "#ffffff",
                },
                "&:hover": {
                  background: "#ffffff",
                },
                "&.Mui-focused": {
                  background: "#ffffff",
                },
              },
              "& :after, & :before": {
                border: "none !important",
              },
              "& .MuiInputLabel-root": {
                transition: "0.3s ease-in-out",
              },
              "& .MuiInputBase-root.Mui-disabled": {
                backgroundColor: "none",
                background: "none",
              },
              "& input": {
                pt: 2.5,
              },
              ...sx,
            }}
            multiline={multiline}
          />
        ) : (
          <OutlinedInput
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            type={type === "password" ? passwordType : type}
            disabled={disabled}
            multiline={multiline}
            fullWidth
            placeholder=" "
            endAdornment={
              type === "password" && value ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {passwordType === "text" ? (
                      <VisibilityOff sx={{ color: theme.palette.gray[900] }} />
                    ) : (
                      <Visibility sx={{ color: theme.palette.gray[900] }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ) : adornment ? (
                adornment
              ) : (
                ""
              )
            }
            {...restProps}
            sx={{
              height: multiline ? "unset" : height ? height : 40,
              border: `1px solid ${theme.palette.gray[90]}`,
              color: theme.palette.gray[900],
              fontWeight: 500,
              marginBottom: 1,
              textTransform: "capitalize !important",
              overflow: "hidden",
              fontSize: "14px",
              // paddingTop: variant === 'standard' ? '1rem' : null,
              "&.Mui-disabled": { borderColor: theme.palette.gray[100] },
              "& fieldset": { border: "0 !important" },
              "&.MuiInputBase-input": {
                borderBottom: "none",
                backgroundColor: "red",
              },
              "&.MuiInputBase-root.Mui-disabled": {
                backgroundColor: "none",
              },
              ...sx,
            }}
          />
        )}
      </Box>
    </AppFormControl>
  );
};

const useStyles = makeStyles({
  underline: {
    background: "none",
    "&&&:before": {
      borderBottom: "none",
      background: "none",
    },
    "&&:after": {
      borderBottom: "none",
      background: "none",
    },
    "&:focus": {
      background: "#ffffff",
    },
    "&:hover": {
      background: "#ffffff",
    },
    "&.Mui-focused": {
      background: "#ffffff",
    },
    "& .MuiInputBase-root.Mui-disabled": {
      backgroundColor: "none",
    },
  },
});

export default AppInput;
