import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import MicrosoftLogin from "react-microsoft-login";
import { useTheme } from "@mui/styles";

const SocialLogin = () => {
  const theme = useTheme();
  const authHandler = (err, data) => {
    console.log(err, data);
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
        <GoogleLogin
          text="continue_with"
          logo_alignment="center"
          useOneTap
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Box>
      <Box className="w-full px-24 mt-6">
        <MicrosoftLogin
          clientId="ef6d8c0c-4968-4c20-866e-ac765ee9ea15"
          authCallback={authHandler}
          children={
            <Button
              variant="outlined"
              sx={{
                textTransform: "inherit",
                width: "100%",
                borderColor: theme.palette.gray[90],
                color: theme.palette.neutral[50],
                py: 0.8,
              }}
              startIcon={<img src={"/icons/MicrosoftIcon.svg"} width="20" />}
            >
              Continue with Microsoft
            </Button>
          }
        />
      </Box>
    </div>
  );
};

export default SocialLogin;
