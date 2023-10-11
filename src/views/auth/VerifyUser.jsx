import { useMemo, useState } from "react";

// Imports
import { toast } from "react-toastify";

// Components
import { AppForm } from "../../components/forms";
import { useLocation, useNavigate } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";
import AuhComponent from "./components/AuthComponent";
import Notification from "../../components/Notification";
import AppOptInput from "../../components/AppOptInput";

// Redux
import { VerifyLoggedInUser, ResendOtp, getUser } from "../../redux/userSlice";

// Utils
import { parseQuery } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

// Utils
import { setToken, setType } from "../../utils";

const VerifyUser = () => {
  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const queryParams = useMemo(
    () => parseQuery(location.search),
    [location.search]
  );

  // State
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [loading_, setLoading_] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const payload = {
      otp: otp?.join(""),
      user: queryParams?.user,
      tag: "register",
    };
    const res = await VerifyLoggedInUser(payload);
    setLoading(false);
    if (res?.success) {
      console.log({ res });
      dispatch(getUser(res?.data?.user));
      setToken(res?.data?.token);
      setType("type", res?.data?.user?.user_type);
      setTimeout(() => {
        navigate("/user/index");
      }, 2000);
    } else {
      toast.error(
        <Notification title="Something went wrong" description={res?.message} />
      );
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    setLoading_(true);
    const body = {
      user: queryParams?.user,
    };
    const res = await ResendOtp(body);
    setTimeout(() => setLoading(false), 2000);
    if (res?.success) {
      setLoading_(false);
      toast.success(
        <Notification title="Success" description={res?.message} />
      );
    } else {
      setLoading_(false);
      toast.error(
        <Notification title="Something went wrong" description={res?.message} />
      );
    }
  };

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  return (
    <AuhComponent
      title="Verify User"
      subTitle={`Enter 6-digit code sent to you mail: ${user?.email}`}
      type="verify user"
    >
      <div className="w-full px-24 pt-10">
        <AppForm onSubmit={handleSubmit}>
          <AppOptInput pinArray={otp} onChange={handleOtpChange} />
          <AppLoadingButton
            text="Verify"
            sx={{
              width: "100%",
              mt: 2,
            }}
            variant="contained"
            loadingPosition="center"
            type="submit"
            large
            loading={loading}
            disabled={otp?.length < 6}
          />
        </AppForm>
      </div>

      <Stack
        direction="row"
        justifyContent="left"
        alignItems="center"
        sx={{ marginTop: 4 }}
      >
        <Typography
          sx={{
            color: theme.palette.primary[20],
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Didn’t get the code?
        </Typography>
        <AppLoadingButton
          text="Resend Code"
          type="submit"
          color="primary"
          loading={loading_}
          loadingPosition="center"
          variant={"outlined"}
          onClick={handleResendOtp}
          sx={{
            textTransform: "capitalize",
            marginLeft: 1,
            padding: "0.3rem 0.5rem",
            borderRadius: "10px",
          }}
        />
      </Stack>
    </AuhComponent>
  );
};

export default VerifyUser;
