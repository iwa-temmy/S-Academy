import AppInput from "../../components/AppInput";
import Authheader from "./components/Authheader";
import AppLoadingButton from "../../components/AppLoadingButton";
import { useTheme } from "@mui/material";

const AdminResetPassword = () => {
  const theme = useTheme();
  return (
    <div className="auth-container">
      <div className="flex flex-col items-center h-[90vh] lg:h-[73vh] w-11/12 lg:w-2/5 m-auto mt-6 relative">
        <Authheader text="Reset Password" />
        <form className="w-full pt-14 px-16 lg:px-20">
          <AppInput
            name="old_password"
            label="Old Password"
            height="large"
            type="password"
            variant="filled"
            large
            fullWidth
            sx={{ my: 1 }}
          />
          <AppInput
            name="new_password"
            label="New Password"
            height="large"
            type="password"
            variant="filled"
            large
            fullWidth
            sx={{ my: 1 }}
          />
          <AppInput
            name="confirm_password"
            label="Confirm Password"
            variant="filled"
            large
            type="password"
            fullWidth
            sx={{ my: 1 }}
          />
          <AppLoadingButton
            text="Reset"
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
