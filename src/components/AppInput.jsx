import { TextField } from "@mui/material";

const AppInput = (props) => {
  const {
    name,
    value,
    placeholder,
    label,
    sx = {},
    height,
    onChange,
    ...restProps
  } = props;

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
        }}
      />
    </>
  );
};

export default AppInput;
