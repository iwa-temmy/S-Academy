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
import useValidation from "../../hooks/useFormValidation";
import { LOGIN_VALIDATIONS } from "./util";

const UserLogin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State
  const submitForm = async (data) => {
    const res = await LoginUser(data);
    if (res?.success) {
      const { user, token, verified } = res?.data || {};
      dispatch(getUser(user));
      setToken(token);
      setType("type", user?.user_type);
      if(user?.user_type === "admin") {
        navigate("/admin/index");
      }else if (verified) {
        navigate("/user/index");
      } else {
        navigate(`/auth/verify-email?user=${res?.data?.user?.id}`);
      }
    } else {
      toast.error(
        <Notification
          title="Something went wrong"
          description="We couldn't validate your credentials. Try again!"
        />
      );
    }
  };
  const {
    data,
    loading,
    setFieldValue,
    showError,
    handleFormSubmit,
    // resetForm,
  } = useValidation(LOGIN_VALIDATIONS, submitForm);
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <AuhComponent title="Sign In" type="login">
      <div className="w-full sm:px-4 md:px-10  lg:px-24 pt-10">
        <AppForm onSubmit={handleFormSubmit}>
          <AppFormInput
            name="email"
            label="Email"
            variant="filled"
            type="email"
            large
            fullWidth
            value={data?.email}
            error={showError("email")}
            onChange={handleTextChange}
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
            to="/auth/forget-password"
          >
            Forgot password
          </Typography>
          <AppFormInput
            name="password"
            label="Password"
            variant="filled"
            large
            type="password"
            fullWidth
            value={data?.password}
            error={showError("password")}
            onChange={handleTextChange}
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
              to="/auth/signup"
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
