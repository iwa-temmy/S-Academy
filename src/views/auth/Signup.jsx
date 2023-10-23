import { useState } from "react";

// imports
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

// Components
import { AppForm, AppFormInput } from "../../components/forms";
import AppLoadingButton from "../../components/AppLoadingButton";
import AuhComponent from "./components/AuthComponent";
import Notification from "../../components/Notification";

// Redux
import { RegisterUser, getUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const UserLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const body = {
      email,
      password: new_password,
      first_name,
      last_name,
      user_type: "student",
    };
    const res = await RegisterUser(body);
    setLoading(false);
    if (res?.success) {
      dispatch(getUser(res?.data));
      navigate(`/auth/verify-email?user=${res?.data?.id}`);
    } else {
      toast.error(
        <Notification title="Something went wrong" description={res?.message} />
      );
    }
  };
  return (
    <AuhComponent
      title="Create an account"
      type="signup"
      setLoading={setLoading}
    >
      <div className="w-full px-24 pt-10">
        <AppForm onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <AppFormInput
              name="first_name"
              label="First Name"
              height="large"
              type="text"
              variant="filled"
              medium
              fullWidth
              value={first_name}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <AppFormInput
              name="last_name"
              label="Last Name"
              height="large"
              type="text"
              variant="filled"
              medium
              fullWidth
              value={last_name}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <AppFormInput
              name="email"
              label="Email"
              height="large"
              type="email"
              variant="filled"
              medium
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <AppFormInput
              name="new_password"
              label="Password"
              height="large"
              type="password"
              variant="filled"
              medium
              fullWidth
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
              fullWidth
              variant="filled"
              medium
              value={confirm_password}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </Box>
          <AppLoadingButton
            text="Create account"
            variant="contained"
            loadingPosition="center"
            type="submit"
            sx={{
              width: "100%",
              mt: 2,
            }}
            large
            loading={loading}
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
              to="/auth/login"
            >
              Sign in
            </Typography>
          </div>
        </AppForm>
      </div>
    </AuhComponent>
  );
};

export default UserLogin;
