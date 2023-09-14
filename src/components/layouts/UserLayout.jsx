import { useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { userRoutes } from "../../routes/userRoutes";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const UserLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const getCurrentRoute = (key) =>
      userRoutes.find((route) => route?.key === key);
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
        routes={userRoutes}
        current={currentRoute}
      />
      <Header openDrawer={openSideBar} title={currentRoute?.name} />
      <Box
        sx={{
          width: {
            md: "calc(100% - 120px)",
          },
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
        <Outlet />
      </Box>
    </div>
  );
};

export default UserLayout;
