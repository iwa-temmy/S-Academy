import { Box, Button, Grid, Stack } from "@mui/material";
import { useTheme } from "@mui/styles";
import React, { useRef, useState } from "react";
import AppAvatar from "../../../components/AppAvatar";
import AppInput from "../../../components/AppInput";
import ChangePasswordModal from "./components/ChangePasswordModal";

const Account = () => {
  const theme = useTheme();
  const imageInputRef = useRef();

  const [loading] = useState({ submit: false, upload: false });
  const [files, setFiles] = useState({});
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  const handleFileChange = (name, file) => {
    setFiles({ ...files, [name]: file });
  };

  return (
    <>
      <Stack sx={{ flex: 1, pt: "67px", pb: "150px" }}>
        <form>
          <Box sx={{ width: "694px", margin: "auto" }}>
            <Box
              sx={{
                pb: 2,
              }}
            >
              <AppAvatar
                src={"/icons/Avatar.svg"}
                file={files.picture}
                sx={{ mb: 4 }}
                editable="true"
                variant="circular"
                onChange={(e) => handleFileChange("picture", e.target.files[0])}
                loading={loading?.upload}
                imageFileRef={imageInputRef}
              />
              <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item sm={12} lg={6} md={6}>
                  <AppInput
                    type="text"
                    label="First name"
                    name="first_name"
                    extraLarge
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} lg={6} md={6}>
                  <AppInput
                    type="text"
                    label="Last name"
                    name="last_name"
                    extraLarge
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={4}>
              <Grid item sm={12} lg={12} md={12}>
                <AppInput
                  type="text"
                  label="Email"
                  name="email"
                  extraLarge
                  fullWidth
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  py: 1,
                  px: 2.4,
                  fontWeight: "600",
                  height: 50,
                  backgroundColor: theme.palette.primary[30],
                  width: "170px",
                  "&:hover": {
                    backgroundColor: theme.palette.primary[30],
                    color: theme.palette.shades.white,
                  },
                }}
              >
                Save
              </Button>
              <Button
                variant="text"
                sx={{
                  textTransform: "unset",
                  py: 1,
                  px: 2.4,
                  fontWeight: "600",
                  height: 40,
                  color: "#011947",
                  textDecoration: 'underline'
                }}
                onClick={openModal}
              >
                Change Password
              </Button>
            </Box>
          </Box>
        </form>
      </Stack>
      <ChangePasswordModal
        open={modal}
        handleClose={() => setModal(false)}
        openModal={openModal}
      />
    </>
  );
};

export default Account;
