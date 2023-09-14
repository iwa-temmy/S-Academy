import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

const AuthFooter = () => {
  const theme = useTheme();
  return (
    <div className="flex flex-row justify-between absolute bottom-0 w-full">
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
  );
};

export default AuthFooter;