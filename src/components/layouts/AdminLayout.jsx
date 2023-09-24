import { useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { adminRoutes } from "../../routes/adminRoutes";

const AdminLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const getCurrentRoute = (key) =>
      adminRoutes.find((route) => route?.key === key);
    const current = getCurrentRoute(location.pathname.split("/")[2]);
    setCurrentRoute(current);
    // }
  }, [location.pathname]);
  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };
  return (
    <div className="flex">
      <Sidebar
        open={sideBarOpen}
        handleClose={closeSideBar}
        routes={adminRoutes}
        current={currentRoute}
      />
      <Header openDrawer={openSideBar} title={currentRoute?.name} />
      <Box
        sx={{
          width: {
            md: "calc(100% - 120px)",
          },
          p: 3,
          ml: { md: 15 },
          mt: { xs: "70px", md: "66px" },
          maxWidth: "100%",
          mb: "80px",
          height: {
            xs: "calc(100% - 70px)",
            md: "calc(100% - 66px)",
          },
          overflow: "auto",
          position: "fixed",
          right: 0,
          backgroundColor: "#f8f9fe",
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AdminLayout;
