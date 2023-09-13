import App from "../App";
import { GridView } from "@mui/icons-material";
import { Course } from "@carbon/icons-react";

export const adminRoutes = [
  {
    path: "/admin/index",
    key: "index",
    name: "Dashboard",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/admin/courses",
    key: "courses",
    name: "Courses",
    icon: Course,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/admin/index",
    key: "wanda",
    name: "Dashboard",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/admin/index",
    key: "cunt",
    name: "Dashboard",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
  {
    path: "/admin/index",
    key: "shinra",
    name: "Dashboard",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: App,
  },
];
