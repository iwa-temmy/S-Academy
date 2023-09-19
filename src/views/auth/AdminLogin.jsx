import { Typography } from "@mui/material";
import AppInput from "../../components/AppInput";
import { Link, useNavigate } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";

import { useTheme } from "@mui/styles";
import AuthFooter from "./components/AuthFooter";
import Authheader from "./components/Authheader";
const AdminLogin = () => {
  const theme = useTheme();

  const history = useNavigate();
  return (
    <div className="auth-container">
      <div className="flex flex-col items-center h-[90vh] lg:h-[73vh] w-11/12 lg:w-2/5 m-auto mt-6 relative">
        <Authheader text="Sign In" />
        <form className="w-full pt-14 px-16 lg:px-20">
          <AppInput
            name="email"
            label="Email"
            large
            type="email"
            variant="filled"
            fullWidth
          />
          <Typography
            component={Link}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: theme.palette.primary[40],
              fontSize: "12px",
              pt: 1.5,
            }}
            to="/admin/reset-password"
          >
            Forgot password
          </Typography>
          <AppInput
            name="password"
            label="Password"
            large
            variant="filled"
            type="password"
            fullWidth
          />
          <AppLoadingButton
            text="Sign in"
            sx={{
              backgroundColor: theme.palette.primary[30],
              width: "100%",
              color: theme.palette.shades.white,
              mt: 2,
              "&:hover": {
                backgroundColor: theme.palette.primary[30],
                color: theme.palette.shades.white,
              },
            }}
            onClick={() => {
              history("/admin/index");
            }}
            large
          />
          <div className="flex flex-row gap-2 justify-center pt-4">
            <Typography
              sx={{ fontSize: "12px", color: theme.palette.neutral[30] }}
            >
              Don&apos;t have an account
            </Typography>
            <Typography
              component={Link}
              sx={{ fontSize: "12px", color: theme.palette.primary[30] }}
              to="/"
            >
              Sign up
            </Typography>
          </div>
        </form>
        <AuthFooter />
      </div>
    </div>
  );
};

export default AdminLogin;
