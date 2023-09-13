import { useTheme } from "@mui/material/styles";
import { Drawer } from "@mui/material";

// core components
import SidebarContent from "./SidebarContent";

const SidebarDrawer = (props) => {
  const theme = useTheme();
  const { largeScreen, open, onClose, routes, current } = props;
  return (
    <Drawer
      variant={largeScreen ? "permanent" : "temporary"}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: largeScreen
          ? { xs: "none", md: "block" }
          : { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 120,
          border: "none",
          backgroundColor: theme.palette.primary[30],
          zIndex: 100,
        },
      }}
    >
      <SidebarContent routes={routes} current={current} />
    </Drawer>
  );
};

export default SidebarDrawer;
