import Logo from "../../assets/img/logo.svg";
import { Typography } from "@mui/material";
import AppInput from "../../components/AppInput";
import { Link } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";

import { useTheme } from "@mui/styles";
const AdminLogin = () => {
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center h-[90vh] lg:h-[65vh] bg-red-400 w-11/12 lg:w-2/5 m-auto mt-10">
      <img src={Logo} alt="logo" className="w-[48px]" />
      <Typography>Sign In</Typography>

      <form className="w-full p-24 ">
        <AppInput
          name="email"
          label="Email"
          height="large"
          type="email"
          fullWidth
        />
        <Typography
          component={Link}
          sx={{ display: "flex", justifyContent: "flex-end" }}
          to="/"
        >
          Forgot password
        </Typography>
        <AppInput
          name="password"
          label="Password"
          height="large"
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
          }}
          large
        />
        <div className="flex flex-row gap-2 justify-center">
          <Typography>Don&apos;t have an account</Typography>
          <Typography
            component={Link}
            sx={{ display: "flex", justifyContent: "flex-end" }}
            to="/"
          >
            Sign up
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
