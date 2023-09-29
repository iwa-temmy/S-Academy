import { Navigate } from "react-router-dom";
import { GridView } from "@mui/icons-material";
import { Course } from "@carbon/icons-react";
import Dashboard from "../views/UsersApp/Dashboard/index";
import Courses from "../views/UsersApp/Courses";
import Settings from "../views/UsersApp/Settings/index";
import CourseDetails from "../views/UsersApp/Courses/components/CourseView";

export const userRoutes = [
  {
    path: "/user/index",
    key: "index",
    name: "Dashboard",
    icon: GridView,
    breadcrumb: true,
    exact: false,
    component: Dashboard,
    element: <Dashboard />,
  },
  {
    path: "/user/courses/",
    key: "courses",
    name: "My Courses",
    icon: Course,
    breadcrumb: true,
    exact: false,
    component: Courses,
    element: <Courses />,
  },
  {
    path: "/user/explore",
    key: "explore",
    name: "Explore",
    icon: GridView,
    breadcrumb: true,
    exact: false,
  },
  {
    path: "/user/certificate",
    key: "certificate",
    name: "Certificate",
    icon: GridView,
    breadcrumb: true,
    exact: false,
  },
  {
    path: "/user/settings",
    key: "settings",
    name: "Settings",
    icon: GridView,
    breadcrumb: true,
    exact: false,
  },
];
