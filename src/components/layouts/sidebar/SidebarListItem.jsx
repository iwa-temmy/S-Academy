import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const SidebarListItem = (props) => {
  const theme = useTheme();
  const { active, icon, text, link } = props;
  let extraStyles = {};
  if (active) {
    extraStyles = {
      "&, &:hover": {
        backgroundColor: theme.palette.shades.activeMenu,
        color: theme.palette.shades.white,
        borderRight: "4px solid white",
      },
      "& .listItem__icon": {
        color: theme.palette.shades.white,
      },
      "& .MuiListItemText-primary": {
        fontWeight: 600,
      },
    };
  } else {
    extraStyles = {
      "&, &:hover": {
        color: theme.palette.primary[80],
        backgroundColor: "transparent",
      },
      "& .listItem__icon": {
        color: theme.palette.primary[60],

      },
      "& .MuiListItemText-primary": {
        fontWeight: 500,
      },
    };
  }

  return (
    <ListItemButton
      sx={{
        p: 0.8,
        py: 1,
        flexDirection: "column",
        alignItems: "center",
        ...extraStyles,
      }}
      to={link}
      component={Link}
    >
      <ListItemIcon className="listItem__icon" sx={{ minWidth: "fit-content", }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ "& span": { fontSize: 11 } }} />
    </ListItemButton>
  );
};

export default SidebarListItem;
