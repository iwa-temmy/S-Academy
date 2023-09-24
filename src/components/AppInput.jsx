import { useState } from "react";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@mui/styles";

const AppInput = (props) => {
  const {
    name,
    value,
    placeholder,
    label,
    sx = {},
    height,
    onChange,
    type,
    ...restProps
  } = props;

  const theme = useTheme();
  const [passwordType, setPasswordType] = useState("password");
  const toggleShowPassword = () =>
    setPasswordType((current) =>
      current === "password" ? "text" : "password"
    );

  const getHeight = () => {
    switch (height) {
      case "small":
        return {
          paddingTop: "17px",
          paddingBottom: "0px",
          transform: "translate(12px, 13px) scale(1)",
        };
      case "medium":
        return {
          paddingTop: "21px",
          paddingBottom: "4px",
          transform: "translate(12px, 13px) scale(1)",
        };
      case "large":
        return {
          paddingTop: "25px",
          paddingBottom: "8px",
          transform: "translate(12px, 19px) scale(1)",
        };
      case "extra-large":
        return {
          paddingTop: "29px",
          paddingBottom: "12px",
          transform: "translate(12px, 22px) scale(1)",
        };
    }
  };

  return (
    <>
      <TextField
        variant="filled"
        id={name}
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type === 'password' ? passwordType : type}
        {...restProps}
        sx={{
          "&.MuiInputLabel-root": {
            transform: `${getHeight()?.transform}`,
          },
        }}
        InputProps={{
          sx: {
            "&.MuiFilledInput-root": {
              backgroundColor: "transparent !important",
              border: "1px solid #E1E2EC",
              borderRadius: "4px",
              width: "100%",

              "&::before, &::after": {
                borderBottom: "none",
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "none",
              },
            },
            ".MuiFilledInput-input": {
              paddingTop: `${getHeight()?.paddingTop}  !important`,
              paddingBottom: `${getHeight()?.paddingBottom} !important`,
            },
            ...sx,
          },
          endAdornment: type === "password" && value && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {passwordType === "password" ? (
                  <VisibilityOff sx={{ color: theme.palette.gray[900] }} />
                ) : (
                  <Visibility sx={{ color: theme.palette.gray[900] }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default AppInput;
