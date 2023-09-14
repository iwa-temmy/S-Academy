import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme/theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/RootRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com">
        <RouterProvider router={router}></RouterProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
