import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import SocialLogin from "../../../components/SocialLogin";

const AuthFooter = () => {
  const theme = useTheme();
  return (
    <div className="w-full">
      <SocialLogin />
      <div className="flex flex-row justify-between mt-10">
        <Typography
          component={Link}
          sx={{ fontSize: "12px", color: theme.palette.primary[30] }}
          to="/"
        >
          Privacy policy
        </Typography>
        <Typography
          component={Link}
          sx={{ fontSize: "12px", color: theme.palette.primary[30] }}
          to="/"
        >
          Terms
        </Typography>
        <Typography
          component={Link}
          sx={{ fontSize: "12px", color: theme.palette.primary[30] }}
          to="/"
        >
          Cookie settings
        </Typography>
        <Typography
          component={Link}
          sx={{ fontSize: "12px", color: theme.palette.primary[30] }}
          to="/"
        >
          Copyright 2023 SmartComplyApp Academy
        </Typography>
      </div>
    </div>
  );
};

export default AuthFooter;
