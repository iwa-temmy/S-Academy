import { useState } from "react";

// Imports
import { Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

// Components
import { AppForm, AppFormInput } from "../../components/forms";
import { Link, useNavigate } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";
import AuhComponent from "./components/AuthComponent";
import Notification from "../../components/Notification";

// Redux
import { LoginUser, getUser } from "../../redux/userSlice";

// Utils
import { setToken, setType } from "../../utils";

const UserLogin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
      setLoading(true);
      const body = {
        email,
        password,
      };
      const res = await LoginUser(body);
      setLoading(false);
      if (res?.success) {
        dispatch(getUser(res?.data?.user));
        setToken(res?.data?.token);
        setType("type", res?.data?.user?.user_type);
        navigate("/user/index", { replace: true });
      } else {
        toast.error(
          <Notification
            title="Something went wrong"
            description="We couldn't validate your credentials. Try again!"
          />
        );
      }
  };

  return (
    <AuhComponent title="Sign In" type="login">
      <div className="w-full px-24 pt-10">
        <AppForm onSubmit={handleSubmit}>
          <AppFormInput
            name="email"
            label="Email"
            height="large"
            type="email"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            to="/user/forget-password"
          >
            Forgot password
          </Typography>
          <AppFormInput
            name="password"
            label="Password"
            height="large"
            type="password"
            fullWidth
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <AppLoadingButton
            text="Sign in"
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
        </AppForm>
      </div>
    </AuhComponent>
  );
};

export default UserLogin;
