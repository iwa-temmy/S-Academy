import { MoreHoriz } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import AppMenu from "../app-menu/AppMenu";
import AppMenuItem from "../app-menu/AppMenuItem";
import { useState } from "react";

const TableAction = (props) => {
  const { items } = props;
  const theme = useTheme();
  // states
  const [anchor, setAnchor] = useState(null);

  // functions
  const openMenu = (e) => {
    setAnchor(e.currentTarget);
  };
  const closeMenu = () => setAnchor(null);
  const handleItemClick = (action) => {
    action();
    closeMenu();
  };

  return (
    <>
      <IconButton
        sx={{
          backgroundColor: theme.palette.gray[95],
          borderRadius: 1,
          width: 26,
          height: 22,
          fontSize: 16,
        }}
        onClick={openMenu}
      >
        <MoreHoriz />
      </IconButton>
      <AppMenu anchor={anchor} onClose={closeMenu}>
        {items.map((item, idx) => (
          <AppMenuItem
            onClick={() => handleItemClick(item.action)}
            key={idx}
            label={item.label}
            disabled={item.disabled}
            icon={item.icon}
          />
        ))}
      </AppMenu>
    </>
  );
};

export default TableAction;
