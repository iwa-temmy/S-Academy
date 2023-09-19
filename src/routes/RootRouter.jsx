import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../views/auth/AdminLogin.jsx";
import AdminResetPassword from "../views/auth/AdminResetPassword.jsx";
import UserResetPassword from "../views/auth/UserResetPassword";
import UserLayout from "../components/layouts/UserLayout";
import UserLogin from "../views/auth/UserLogin";
import UserSignup from "../views/auth/UserSignup";
import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";
import Website from "../views/website";
import App from "../App";
import AdminLayout from "../components/layouts/AdminLayout.jsx";

// eslint-disable-next-line react-refresh/only-export-components
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
        element: <AdminLayout />,
        children: adminRoutes,
      },
      {
        path: "/user",
        element: <UserLayout />,
        children: userRoutes,
      },
    ],
  },
]);
