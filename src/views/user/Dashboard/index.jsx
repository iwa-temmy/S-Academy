import { useState, useEffect } from "react";
import Header from "../../../components/layouts/header";
import Sidebar from "../../../components/layouts/sidebar";
import { userRoutes } from "../../../routes/userRoutes";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
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
    <div>
      <Sidebar
        open={sideBarOpen}
        handleClose={closeSideBar}
        routes={userRoutes}
        current={currentRoute}
      />
      <Header openDrawer={openSideBar} title={currentRoute?.name} />
    </div>
  );
};

export default Dashboard;
