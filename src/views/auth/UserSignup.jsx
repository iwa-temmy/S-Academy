import Logo from "../../assets/img/logo.svg";
import { Typography } from "@mui/material";
import AppInput from "../../components/AppInput";
import { Link } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";
import AuhComponent from "../../components/AuthComponent";

import { useTheme } from "@mui/styles";
import AppSelect from "../../components/AppSelect";
const UserLogin = () => {
  const theme = useTheme();
  return (
    <AuhComponent>
      <img src={Logo} alt="logo" className="w-[48px] " />
      <Typography>Create an account</Typography>

      <form className="w-full px-24 pt-20">
        <AppInput
          name="first_name"
          label="First Name"
          height="large"
          type="text"
          sx={{ mb: 2 }}
          fullWidth
        />
        <AppInput
          name="last_name"
          label="Last Name"
          height="large"
          type="text"
          sx={{ mb: 2 }}
          fullWidth
        />
        <AppInput
          name="email"
          label="Email"
          height="large"
          type="email"
          sx={{ mb: 2 }}
          fullWidth
        />
        <AppInput
          name="password"
          label="Password"
          height="large"
          type="password"
          sx={{ mb: 2 }}
          fullWidth
        />
        <AppSelect
          label="Course Tutor"
          defaultValue="Select your preferred currency"
          options={[
            { name: "NGN", value: "NGN" },
            { name: "USD", value: "USD" },
          ]}
          height="large"
          variant={"filled"}
          fullWidth={false}
        />
        <AppLoadingButton
          text="Create account"
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
            Already have an account
          </Typography>
          <Typography
            component={Link}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "12px",
              color: theme.palette.primary[40],
            }}
            to="/user/login"
          >
            Sign in
          </Typography>
        </div>
      </form>
    </AuhComponent>
  );
};

export default UserLogin;
