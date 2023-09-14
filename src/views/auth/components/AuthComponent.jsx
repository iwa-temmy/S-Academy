import { useTheme } from "@mui/material";
import React from "react";
import HalfShield from "../../../assets/img/HalfShield.png";
import AuthFooter from "./AuthUserFooter";
import Authheader from "./Authheader";

const AuthComponent = ({ text, children }) => {
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center h-[90vh] lg:h-[65vh] w-11/12 lg:w-2/5 m-auto my-10 relative">
      <Authheader text={text} />
      <img
        src={HalfShield}
        style={{ position: "absolute", left: "-75%", top: "20%" }}
      />
      {children}
      <AuthFooter />
    </div>
  );
};

export default AuthComponent;
