import { Box, Button, Divider, Typography } from "@mui/material";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  // signOut,
} from "firebase/auth";
import { GoogleLogin, getUser } from "../redux/slices/userSlice";
import { toast } from "react-toastify";
import Notification from "../components/Notification";
import { useDispatch } from "react-redux";
// Utils
import { setToken, setType } from "../utils";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({ setLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firebaseApp = initializeApp({
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: `${import.meta.env.VITE_APP_PROJECT_ID}.firebaseapp.com`,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
  });

  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseApp) : getApp();

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const signInWithGoogle = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);

      const provider = new GoogleAuthProvider();

      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      provider.setCustomParameters({
        prompt: "select_account",
        redirect_uri: "localhost:8000/auth/login",
      });

      const result = await signInWithPopup(auth, provider);
      const body = {
        access_token: result?.user?.accessToken,
      };

      // Call the custom verify api with the token
      setLoading(true);
      const res = await GoogleLogin(body);
      setLoading(false);
      if (res?.success) {
        dispatch(getUser(res?.data?.user));
        setToken(res?.data?.token);
        setType("type", "student");
        navigate("/user/index");
      } else {
        toast.error(
          <Notification
            title="Something went wrong"
            description={res?.message}
          />
        );
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center" }}
        className="w-full px-24 py-5"
      >
        <Divider sx={{ width: "45%" }} />
        <Typography sx={{ mx: 1 }}>OR</Typography>
        <Divider sx={{ width: "45%" }} />
      </Box>
      <Box className="w-full px-24">
        <Button
          variant="outlined"
          // onClick={() => login()}
          onClick={signInWithGoogle}
          startIcon={<img src="/icons/GoogleIcon.svg" alt="GoogleIcon" />}
          sx={{
            textTransform: "unset",
            borderColor: "#E1E2EC",
            color: "#77777A",
            width: "100%",
            height: "40px",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              borderColor: "#E1E2EC",
            },
          }}
        >
          Continue with google
        </Button>
      </Box>
    </div>
  );
};

export default SocialLogin;
