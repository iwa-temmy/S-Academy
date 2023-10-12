// Imports
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";

// Components
import { AppForm, AppFormInput } from "../../components/forms";
import { useNavigate } from "react-router-dom";
import AppLoadingButton from "../../components/AppLoadingButton";
import AuhComponent from "./components/AuthComponent";
import Notification from "../../components/Notification";

// Redux
import { ForgetPassword } from "../../redux/userSlice";
import useValidation from "../../hooks/useFormValidation";
import { RESET_PASSWORD_VALIDATIONS } from "./util";

// Utils

const UserLogin = () => {
  // const theme = useTheme();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // State

  const submitForm = async (data) => {
    const res = await ForgetPassword(data);
    if (res?.success) {
      navigate("/auth/reset-password");
      // toast.success(
      //   <Notification title="Success" description={res.message} />
      // );
    } else {
      toast.error(
        <Notification title="Something went wrong" description={res?.message} />
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
  } = useValidation(RESET_PASSWORD_VALIDATIONS, submitForm);
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  console.log(showError("email"));

  return (
    <AuhComponent title="Forget Password" type="forget_password">
      <div className="w-full px-24 pt-10">
        <AppForm onSubmit={handleFormSubmit}>
          <AppFormInput
            name="email"
            label="Email"
            type="email"
            variant="filled"
            medium
            fullWidth
            value={data?.email}
            onChange={handleTextChange}
            error={showError("email")}
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
