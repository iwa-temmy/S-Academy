import { useState } from "react";

// Imports
import { useTheme } from "@mui/styles";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

// Components
import { AppForm, AppFormInput } from "../../components/forms";
import { useNavigate } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";
import AuhComponent from "./components/AuthComponent";
import Notification from "../../components/Notification";

// Redux
import { ForgetPassword } from "../../redux/userSlice";

// Utils
import { forget_password_validation } from "./utils/validation";

const UserLogin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
      setLoading(true);
      const body = {
        email,
      };
      const res = await ForgetPassword(body);
      setLoading(false);
      if (res?.success) {
        toast.success(
          <Notification title="Success" description={res.message} />
        );
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
    <AuhComponent title="Forget Password" type='forget_password'>
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
        </AppForm>
      </div>
    </AuhComponent>
  );
};

export default UserLogin;
