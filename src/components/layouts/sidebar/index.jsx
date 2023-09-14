import { Box } from "@mui/material";

// core components
import SidebarDrawer from "./SidebarDrawer";

const Sidebar = (props) => {
  const { open, handleClose, current, routes } = props;
  return (
    <Box
      component="nav"
      sx={{
        width: { md: 120 },
        flexShrink: { md: 0 },
        height: "100vh",
      }}
    >
      {/* for small screens */}
      <SidebarDrawer
        largeScreen={false}
        open={open}
        onClose={handleClose}
        routes={routes}
        current={current}
      />

      {/* for large screens */}
      <SidebarDrawer largeScreen={true} routes={routes} current={current} />
    </Box>
  );
};

export default Sidebar;
