import App from "../App";
import { GridView } from "@mui/icons-material";
import { Course } from "@carbon/icons-react";
import AdminDashboard from "../views/admin/Dashboard";
import Courses from "../views/admin/Courses";
import Tutors from "../views/admin/Tutors";
import UserLogin from "../views/auth/Login";

export const adminRoutes = [
  {
    path: "/admin/login",
    element: <UserLogin />,
  },
  {
    path: "/admin/index",
    key: "index",
    name: "Dashboard",
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
    element: <AdminDashboard />,
  },
  {
    path: "/admin/courses",
    key: "courses",
    name: "My Courses",
    visible: true,
    icon: Course,
    breadcrumb: true,
    exact: false,
    element: <Courses />,
  },
  {
    path: "/admin/learners",
    key: "learners",
    name: "Learners",
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
    element: App,
  },
  {
    path: "/admin/tutors",
    key: "tutors",
    name: "Tutors",
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
    element: <Tutors />,
  },
  {
    path: "/admin/settings",
    key: "settings",
    name: "Settings",
    visible: true,
    icon: GridView,
    breadcrumb: true,
    exact: false,
    element: App,
  },
];
