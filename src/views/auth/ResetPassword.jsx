import AppLoadingButton from "../../components/AppLoadingButton";
import { AppForm, AppFormInput } from "../../components/forms";
import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import AuhComponent from "./components/AuthComponent";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ResetPassword } from "../../redux/userSlice";

const UserResetPassword = () => {
  const theme = useTheme();
  const { search } = useLocation();
  const navigate = useNavigate();
  // states
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const urlParams = Object.fromEntries([...new URLSearchParams(search)]);
  const user_id = urlParams.user_id;
  const confirmation_token = urlParams.confirmation_token;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const body = {
      new_password,
      confirm_password,
    };
    const res = await ResetPassword(body, user_id, confirmation_token);
    setLoading(false);
    if (res?.success) {
      toast.success(
        <Notification title="Success" description={res?.message} />
      );
      navigate("/auth/login");
    } else {
      toast.error(
        <Notification title="Something went wrong" description={res?.message} />
      );
    }
  };

  return (
    <AuhComponent title="Sign In" type="login" setLoading={setLoading}>
      <div className="w-full px-24 pt-10">
        <AppForm
          className="w-full pt-14 px-16 lg:px-20"
          onSubmit={handleSubmit}
        >
          <Box sx={{ mb: 2 }}>
            <AppFormInput
              name="new_password"
              label="New Password"
              height="large"
              type="password"
              variant="filled"
              medium
              fullWidth
              sx={{ my: 1 }}
              value={new_password}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <AppFormInput
              name="confirm_password"
              label="Confirm Password"
              height="large"
              type="password"
              variant="filled"
              medium
              fullWidth
              sx={{ my: 1 }}
              value={confirm_password}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </Box>
          <AppLoadingButton
            text="Reset"
            sx={{
              width: "100%",
              mt: 2,
            }}
            variant="contained"
            loadingPosition="center"
            type="submit"
            large
            loading={loading}
          />
        </AppForm>
      </div>
    </AuhComponent>
  );
};

export default UserResetPassword;
