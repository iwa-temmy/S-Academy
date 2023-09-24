import { validation } from "../../../utils/validate";

export const login_validation = (values) => {
  const errors = {};
  const emailValidate = validation(values?.email, "email", true);
  const passwordValidate = validation(values?.password, "pasword", true);

  if (!emailValidate.isValid) {
    errors.email = emailValidate.errorMessage;
  }
  if (!passwordValidate.isValid) {
    errors.password = passwordValidate.errorMessage;
  }

  return errors;
};
export const signup_validation = (values) => {
  const errors = {};
  const emailValidate = validation(values?.email, "email", true);
  const newPasswordValidate = validation(
    values?.new_password,
    "new_password",
    true
  );
  const confirmPasswordValidate = validation(
    values?.confirm_password,
    "confirm_password",
    true
  );
  const firstNameValidate = validation(values?.first_name, "first_name", true);
  const lastNameValidate = validation(values?.last_name, "last_name", true);

  if (!emailValidate.isValid) {
    errors.email = emailValidate.errorMessage;
  }
  if (!newPasswordValidate.isValid) {
    errors.new_password = newPasswordValidate.errorMessage;
  }
  if (!confirmPasswordValidate.isValid) {
    errors.confirm_password = confirmPasswordValidate.errorMessage;
  }
  if (!firstNameValidate.isValid) {
    errors.first_name = firstNameValidate.errorMessage;
  }
  if (!lastNameValidate.isValid) {
    errors.last_name = lastNameValidate.errorMessage;
  }

  return errors;
};


export const forget_password_validation = (values) => {
  const errors = {};
  const emailValidate = validation(values?.email, "email", true);

  if (!emailValidate.isValid) {
    errors.email = emailValidate.errorMessage;
  }

  return errors;
};


export const otp_validation = (values) => {
  const errors = {};
  const otpValidate = validation(values?.otp, "otp", true);

  if (!emailValidate.isValid) {
    errors.otp = otpValidate.errorMessage;
  }

  return errors;
};
