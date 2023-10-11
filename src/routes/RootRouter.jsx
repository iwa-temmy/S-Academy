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

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Website />,
      },
      {
        path: "/auth",
        element: <Outlet />,
        children: AuthRouter,
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

export default AllRoutes;
