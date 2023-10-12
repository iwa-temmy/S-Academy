export const RESET_PASSWORD_VALIDATIONS = {
  email: {
    name: "Email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,7}$/i,
    required: true,
  },
};

export const LOGIN_VALIDATIONS = {
  email: {
    name: "Email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,7}$/i,
    required: true,
  },
  password: {
    name: "Password",
    required: true,
  },
};
