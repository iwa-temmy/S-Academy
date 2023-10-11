import { useState, useEffect } from "react";
import Header from "./userHeader";
import Sidebar from "./sidebar";
import { userRoutes } from "../../routes/userRoutes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { getUserToken } from "../../utils";

const UserLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);
  const auth = getUserToken();

  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (pathname === "/user") {
      navigate("/user/index");
    }
  }, [pathname]);
  // useEffect(() => {
  //   if (auth) {
  //     navigate("/user");
  //   } else {
  //     navigate("/");
  //   }
  // }, [auth]);
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
