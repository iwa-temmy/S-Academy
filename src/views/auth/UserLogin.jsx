import Logo from "../../assets/img/logo.svg";
import { Typography } from "@mui/material";
import AppInput from "../../components/AppInput";
import { Link } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";
import AuhComponent from "../../components/AuthComponent";

import { useTheme } from "@mui/styles";
const UserLogin = () => {
  const theme = useTheme();
  return (
    <AuhComponent>
      <img src={Logo} alt="logo" className="w-[48px]" />
      <Typography>Sign In</Typography>

      <form className="w-full px-24 pt-20">
        <AppInput
          name="email"
          label="Email"
          height="large"
          type="email"
          fullWidth
        />
        <Typography
          component={Link}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "12px",
            mt: 1,
            color: theme.palette.primary[40],
          }}
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
        <div className="flex flex-row gap-2 justify-center mt-5">
          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            Don&apos;t have an account
          </Typography>
          <Typography
            component={Link}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "12px",
              color: theme.palette.primary[40],
            }}
            to="/user/signup"
          >
            Sign up
          </Typography>
        </div>
      </form>
    </AuhComponent>
  );
};

export default UserLogin;
