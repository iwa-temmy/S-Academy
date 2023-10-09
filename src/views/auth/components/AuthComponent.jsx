import React from "react";
import AuthFooter from "./AuthUserFooter";
import Authheader from "./Authheader";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";

const AuthComponent = ({ title, subTitle, type, children }) => {
  const theme = useTheme();
  return (
    <div className="auth-container">
      <div
        className={` ${
          type === "forget_password"
            ? "mt-40"
            : type === "verify user"
            ? "mt-40"
            : "mt-10"
        } my-10 flex flex-col items-center h-[90vh] lg:h-[65vh] w-11/12 lg:w-2/5 m-auto relative`}
      >
        <Authheader text={title} />
        <Typography
          sx={{
            color: "#8F9099",
            fontSize: "14px",
            fontWeight: "500",
            marginLeft: "0.5rem",
            [theme.breakpoints.up("md")]: {
              fontSize: "12px",
            },
          }}
        >
          {subTitle}
        </Typography>
        {children}
        {type === "login" ? (
          <AuthFooter />
        ) : type === "signup" ? (
          <AuthFooter />
        ) : null}
      </div>
    </div>
  );
};

export default AuthComponent;
