import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  MenuItem,
  Select,
  Radio,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import AppFormControl from "./AppFormControl";
// import FormTooltip from "./new_components/FormTooltip";
import SearchIcon from "@mui/icons-material/Search";

const AppSelect = ({
  label,
  labelStyle,
  name,
  options,
  value,
  defaultValue,
  error,
  multiple,
  disabled,
  loading,
  onChange,
  MenuProps,
  sx = {},
  fullWidth = true,
  //   custom,
  variant,
  small,
  medium,
  large,
  extraLarge,
  //   placeholder,
  type = "default",
  hasModal,
  handleClick,
  isSearchable,
  ...restProps
}) => {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const newValue =
    typeof value === "string" || typeof value === "number"
      ? value?.toString()?.trim()
      : value?.map((item) => item.toString().trim());

  const filteredOptions = options?.filter((option) => {
    return option.name?.toLowerCase()?.includes(search?.toLowerCase());
  });

  const newOptions = isSearchable ? filteredOptions : options;

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
    <>
      <AppFormControl
        name={name}
        label={label}
        error={error}
        disabled={disabled}
        labelStyle={labelStyle}
        fullWidth={fullWidth}
        variant={variant}
        sx={{ width: "100%" }}
      >
        <Select
          label={label}
          value={newValue}
          displayEmpty
          IconComponent={ExpandMore}
          disabled={disabled}
          renderValue={(selected) =>
            options?.find((option) => option?.value === selected)?.name ||
            defaultValue
          }
          sx={{
            height: height ? height : 40,
            fontSize: 14,
            border: "0.5px solid",
            borderColor: error
              ? theme.palette.error[700]
              : theme.palette.gray[90],
            color: (multiple ? value.length : value)
              ? theme.palette.neutral[60]
              : theme.palette.neutral[60],
            "&.Mui-disabled": { borderColor: theme.palette.gray[100] },
            "& fieldset": { border: "0 !important" },
            "&	.MuiFilledInput-input": {
              backgroundColor: "transparent",
              transition: "0.2s ease all",
            },
            ...sx,
          }}
          name={name}
          multiple={multiple}
          onChange={onChange}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 250,
                maxWidth: "500px",
                backgroundColor: theme.palette.shades.white,
                boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.1)",
                border: `0.6px solid ${theme.palette.neutral[60]}2f`,
                minWidth: 90,
                mt: 0.5,
              },
            },
            ...MenuProps,
          }}
          {...restProps}
        >
          {isSearchable ? (
            <MenuItem
              selected={false}
              autoFocus={false}
              onClickCapture={(e) => {
                e.stopPropagation();
              }}
              onKeyDownCapture={(e) => {
                e.stopPropagation();
              }}
              sx={{
                "&:hover": {
                  background: "none",
                },
                "&&&:before": {
                  background: "none",
                },
                "&&:after": {
                  background: "none",
                },
                "&:focus": {
                  background: "none",
                },
                "&.Mui-focused": {
                  background: "none",
                },
                "&.MuiMenuItem-root": {
                  background: "none",
                },
              }}
            >
              <TextField
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                variant="standard"
                placeholder="Search for a role"
                sx={{
                  mx: 0.8,
                  width: "97%",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{
                          color: theme.palette.gray[900],
                          width: 20,
                          height: 20,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </MenuItem>
          ) : (
            <MenuItem
              disabled
              sx={{
                fontWeight: 500,
                fontSize: 14,
                color: theme.palette.gray[60],
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              value=" "
            >
              {defaultValue}
            </MenuItem>
          )}
          {!loading ? (
            newOptions?.map((option) => {
              return (
                <MenuItem
                  value={option.value}
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: theme.palette.gray[60],
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    "& .MuiButtonBase-root:hover": {
                      backgroundColor:
                        type === "checkbox"
                          ? "transparent"
                          : "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                  key={option.value}
                  label={option.name}
                >
                  {type === "checkbox" && (
                    <Radio
                      checked={value === option.value}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  )}
                  {option.name}
                  {hasModal && (
                    <Button
                      variant="text"
                      onClick={handleClick}
                      sx={{
                        color: theme.palette.primary[50],
                        textTransform: "lowercase",
                        fontSize: "12px",
                        fontWeight: 500,
                        position: "absolute",
                        right: "3%",
                      }}
                    >
                      {hasModal}
                    </Button>
                  )}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem disabled sx={{ color: theme.palette.gray[40] }}>
              Loading.......
            </MenuItem>
          )}
        </Select>
      </AppFormControl>
    </>
  );
};

export default AppSelect;
