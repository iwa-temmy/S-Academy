import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import { GoogleLogin } from "react-google-login";
import MicrosoftLogin from "react-microsoft-login";
import GoogleIcon from "../assets/icons/GoogleIcon.svg";
import MicrosoftIcon from "../assets/icons/MicrosoftIcon.svg";

const SocialLogin = () => {
  const theme = useTheme();

  const responseGoogle = (response) => {
    console.log(response);
  };
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center" }}
        className="w-full px-24 py-10"
      >
        <Divider sx={{ width: "45%" }} />
        <Typography sx={{ mx: 1 }}>OR</Typography>
        <Divider sx={{ width: "45%" }} />
      </Box>
      <Box className="w-full px-24">
        <GoogleLogin
          clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
          render={(renderProps) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: `1px solid ${theme.palette.gray[90]}`,
                borderRadius: 1,
                py: 1,
              }}
            >
              <img src={GoogleIcon} />
              <button
                className="ml-1"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{ color: "#77777A", fontSize: "12px" }}
              >
                Continue with google
              </button>
            </Box>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          style={{ backgroundColor: "none" }}
        />
      </Box>
      <Box className="w-full px-24">
        <MicrosoftLogin
          clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
          authCallback={authHandler}
        />
      </Box>
    </div>
  );
};

export default SocialLogin;
