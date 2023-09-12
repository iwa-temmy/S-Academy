import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme/theme";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "./views/auth/AdminLogin.jsx";
import AdminResetPassword from "./views/auth/AdminResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/reset-password",
    element: <AdminResetPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
