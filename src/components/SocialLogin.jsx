import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const SocialLogin = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer  ${response.access_token}` },
          }
        );
        console.log({ res });
      } catch (err) {
        console.log("err");
      }
    },
  });
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
          onClick={() => login()}
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
