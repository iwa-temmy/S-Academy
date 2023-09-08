import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const AppButton = forwardRef((props, ref) => {
  const theme = useTheme();
  const { name, icon, sx, small, medium, large, extraLarge, ...otherProps } =
    props;

  // Input Height Variant
  const heightValue = small || medium || large || extraLarge;

  let height;
  switch (heightValue) {
    case small:
      height = 38;
      break;
    case medium:
      height = 48;
      break;
    case large:
      height = 56;
      break;
    case extraLarge:
      height = 64;
  }

  return (
    <Button
      sx={{
        display: "flex-inline",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        borderRadius: "4px",
        py: 1,
        px: 2.4,
        textTransform: "unset",
        "&.Mui-disabled": {
          color: theme.palette.white.main,
          backgroundColor: theme.palette.gray[70],
        },
        height,
        ...sx,
      }}
      startIcon={icon}
      {...otherProps}
      ref={ref}
    >
      {name}
    </Button>
  );
});

AppButton.displayName = "AppButton";
export default AppButton;
