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
import { VerifyLoggedInUser } from "../../redux/userSlice";

// Utils
import { parseQuery } from "../../utils";
import { useSelector } from "react-redux";

const VerifyUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const queryParams = useMemo(
    () => parseQuery(location.search),
    [location.search]
  );

  // State
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const payload = {
      otp,
      user: queryParams?.user,
      tag: user_info?.is_active === false ? "login" : "register",
    };
    const res = await VerifyLoggedInUser(payload);
    setLoading(false);
    if (res?.success) {
      toast.success(
        <Notification title="Success" description={res?.message} />
      );
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } else {
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
    </AuhComponent>
  );
};

export default VerifyUser;
