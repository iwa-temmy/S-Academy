// import { Navigate } from "react-router-dom";
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
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
    element: <Dashboard />,
  },
  {
    path: "/user/courses/",
    key: "courses",
    name: "My Courses",
    visible: true,
    icon: Course,
    breadcrumb: true,
    exact: false,
    element: <Courses />,
  },
  {
    path: "/user/courses/:id",
    key: "courses",
    name: "My Courses",
    visible: false,
    icon: Course,
    breadcrumb: true,
    exact: false,
    element: <CourseDetails />,
  },
  {
    path: "/user/explore",
    key: "explore",
    name: "Explore",
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
  },
  {
    path: "/user/certificate",
    key: "certificate",
    name: "Certificate",
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
  },
  {
    path: "/user/settings",
    key: "settings",
    name: "Settings",
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
    element: <Settings />,
  },
];
