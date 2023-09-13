import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import HalfShield from "../assets/img/HalfShield.png";
import SocialLogin from "./SocialLogin";

const AuthComponent = ({ children }) => {
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center h-[90vh] lg:h-[65vh] w-11/12 lg:w-2/5 m-auto my-10 relative">
      <img
        src={HalfShield}
        style={{ position: "absolute", left: "-75%", top: "20%" }}
      />
      {children}
      <div className="w-full">
        <SocialLogin />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 10,
        }}
        className="w-full"
      >
        <Typography sx={{ fontSize: "12px", color: theme.palette.primary[30] }}>
          Privacy policy
        </Typography>
        <Typography sx={{ fontSize: "12px", color: theme.palette.primary[30] }}>
          Terms
        </Typography>
        <Typography sx={{ fontSize: "12px", color: theme.palette.primary[30] }}>
          Cookie settings
        </Typography>
        <Typography sx={{ fontSize: "12px", color: theme.palette.primary[30] }}>
          &copy; 2023 SmartComplyApp Academy
        </Typography>
      </Box>
    </div>
  );
};

export default AuthComponent;
