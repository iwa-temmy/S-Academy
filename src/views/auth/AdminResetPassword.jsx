import AppInput from "../../components/AppInput";
import AppLoadingButton from "../../components/AppLoadingButton";
import Authheader from "./components/Authheader";
import { useTheme } from "@mui/styles";
const AdminResetPassword = () => {
  const theme = useTheme();
  return (
    <div className="auth-container">
      <div className="flex flex-col items-center h-[90vh] lg:h-[73vh] w-11/12 lg:w-2/5 m-auto mt-6 relative">
        <Authheader text="Reset password" />
        <form className="w-full pt-14 px-16 lg:px-20">
          <AppInput
            name="email"
            label="Email"
            height="large"
            type="email"
            fullWidth
          />
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
              "&:hover": {
                backgroundColor: theme.palette.primary[30],
                color: theme.palette.shades.white,
              },
            }}
            large
          />
        </form>
      </div>
    </div>
  );
};

export default AdminResetPassword;
