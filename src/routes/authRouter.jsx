import UserResetPassword from "../views/auth/ResetPassword";
import UserLogin from "../views/auth/Login";
import UserSignup from "../views/auth/Signup";
import UserForgetPassword from "../views/auth/ForgetPassword";
import VerifyUser from "../views/auth/VerifyUser";

const AuthRouter = [
  {
    path: "/auth/login",
    element: <UserLogin />,
  },
  {
    path: "/auth/signup",
    element: <UserSignup />,
  },
  {
    path: "/auth/forget-password",
    element: <UserForgetPassword />,
  },
  {
    path: "/auth/verify-email",
    element: <VerifyUser />,
  },
  {
    path: "/auth/reset-password",
    element: <UserResetPassword />,
  },
];

export default AuthRouter;
