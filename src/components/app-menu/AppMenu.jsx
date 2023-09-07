import { Menu, useTheme } from "@mui/material";

const AppMenu = (props) => {
  const {
    anchor,
    onClose,
    children,
    transformOrigin,
    anchorOrigin,
    sx,
    ...otherProps
  } = props;
  const theme = useTheme();
  return (
    <Menu
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={onClose}
      anchorOrigin={anchorOrigin || { horizontal: "right", vertical: "bottom" }}
      transformOrigin={
        transformOrigin || {
          vertical: "top",
          horizontal: "right",
        }
      }
      sx={{
        "& .MuiMenu-paper": {
          backgroundColor: theme.palette.shades.white,
          boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.1)",
          border: `0.6px solid ${theme.palette.neutral[60]}2f`,
          minWidth: 90,
          mt: 0.5,
        },
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Menu>
  );
};

export default AppMenu;
