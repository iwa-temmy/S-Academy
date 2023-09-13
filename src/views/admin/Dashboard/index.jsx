import { useState } from "react";
import Header from "../../../components/layouts/header";
import Sidebar from "../../../components/layouts/sidebar";
import { adminRoutes } from "../../../routes/adminRoutes";

const Dashboard = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

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
        routes={adminRoutes}
      />
      <Header openDrawer={openSideBar} />
    </div>
  );
};

export default Dashboard;
