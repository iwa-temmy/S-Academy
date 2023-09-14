import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../views/auth/AdminLogin.jsx";
import AdminResetPassword from "../views/auth/AdminResetPassword.jsx";
import UserResetPassword from "../views/auth/UserResetPassword";
import UserDashboard from "../views/user/Dashboard/index.jsx";
import UserLogin from "../views/auth/UserLogin";
import UserSignup from "../views/auth/UserSignup";
import { userRoutes } from "./userRoutes";
import { adminRoutes } from "./adminRoutes";
import Website from '../views/website';
import App from "../App";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Website />,
      },
      {
        path: "/user/login",
        element: <UserLogin />,
      },
      {
        path: "/user/signup",
        element: <UserSignup />,
      },
      {
        path: "/admin/login",
        element: <AdminLogin />,
      },
      {
        path: "/admin/reset-password",
        element: <AdminResetPassword />,
      },
      {
        path: "/user/reset-password",
        element: <UserResetPassword />,
      },
      {
        path: "/admin",
        element: <UserDashboard />,
        children: adminRoutes,
      },
      {
        path: "/user",
        element: <UserDashboard />,
        children: userRoutes,
      },
    ],
  },
]);
