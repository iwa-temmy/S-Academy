import { FormControlLabel, Checkbox } from "@mui/material";
const AppCheckbox = (props) => {
  const { checked, label, onChange, labelProps, ...restProps } = props;

  const { sx } = labelProps || {};
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            color: "#011947",
            "& .MuiSvgIcon-root": { fontSize: 16 },
            "&.Mui-checked": {
              color: "#011947",
            },
          }}
          {...restProps}
        />
      }
      sx={{
        color: "#5E5E62",
        "& .MuiFormControlLabel-label": { fontSize: "12px" },
        ...sx,
      }}
      label={label}
    />
  );
};

export default AppCheckbox;
