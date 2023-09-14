import App from "../App";
import { GridView } from "@mui/icons-material";
import { Course } from "@carbon/icons-react";

export const userRoutes = [
  {
    path: "/user/index",
    key: "index",
    name: "Dashboard",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/user/courses",
    key: "courses",
    name: "My Courses",
    icon: Course,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/user/explore",
    key: "explore",
    name: "Explore",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/user/certificate",
    key: "certificate",
    name: "Certificate",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/user/settings",
    key: "settings",
    name: "Settings",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
];
