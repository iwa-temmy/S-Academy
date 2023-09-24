import React from "react";
import { Box, Button } from "@mui/material";
import AppModal from "../../../../components/AppModal";
import AppInput from "../../../../components/AppInput";
import { useTheme } from "@mui/styles";

const ChangePasswordModal = (props) => {
  const { open, handleClose } = props;
  const theme = useTheme();
  return (
    <AppModal
      open={open}
      handleClose={handleClose}
      title="Change Password"
      headerProps={{ border: true, enable: true }}
      hasCloseBtn
      sx={{ content: {}, paper: {} }}
    >
      <Box sx={{ px: "10px ", pt: "20px", pb: "30px" }}>
        <form>
          <Box>
            <AppInput
              type="password"
              placeholder="Enter current password"
              name="current_password"
              medium
              fullWidth
              sx={{ my: 1 }}
            />
            <AppInput
              type="password"
              placeholder="Enter new password"
              name="new_password"
              emedium
              fullWidth
              sx={{ my: 1 }}
            />
            <AppInput
              type="password"
              placeholder="Enter new password again"
              name="confirm_password"
              medium
              fullWidth
              sx={{ my: 1 }}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: 'unset',
                py: 1,
                px: 2.4,
                fontWeight: "600",
                height: 60,
                mt: 2,
                backgroundColor: theme.palette.primary[30],
                width: "100%",
                "&:hover": {
                  backgroundColor: theme.palette.primary[30],
                  color: theme.palette.shades.white,
                },
              }}
            >
              Change Password
            </Button>
          </Box>
        </form>
      </Box>
    </AppModal>
  );
};

export default ChangePasswordModal;
