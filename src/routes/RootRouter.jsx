import { createBrowserRouter, Outlet } from "react-router-dom";
import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";
import AuthRouter from "./authRouter";
import Website from "../views/website";
import App from "../App";
import PrivateRoute from "../PrivateRoute.jsx";
import { getType, getUserToken } from "../utils";

const auth = getUserToken();
const type = getType("type");
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
        path:
          auth && type === "student"
            ? "/user"
            : auth && type === "admin"
            ? "/admin"
            : "/auth",
        element: auth ? <PrivateRoute /> : <Outlet />,
        children:
          auth && type === "student"
            ? userRoutes
            : auth && type === "admin"
            ? adminRoutes
            : AuthRouter,
      },
      {
        path: "/admin",
        element: <PrivateRoute />,
        children: adminRoutes,
      },
      {
        path: "/user",
        element: <PrivateRoute />,
        children: userRoutes,
      },
    ],
  },
]);
