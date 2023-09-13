import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../views/auth/AdminLogin.jsx";
import App from "../App";
import AdminRouter from "./AdminRoutes";

export default createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/admin",
        element: <Outlet />,
        children: AdminRouter,
      },
    ],
  },
  //   {
  //     path: "/admin/login",
  //     element: <AdminLogin />,
  //   },
]);
