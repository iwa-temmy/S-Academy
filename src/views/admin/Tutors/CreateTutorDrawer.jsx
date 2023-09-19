import { useState } from "react";
import { useTheme } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import AppDrawer from "../../../components/AppDrawer";
import AppDragAndDrop from "../../../components/AppDragAndDrop";
import AppInput from "../../../components/AppInput";
import AppLoadingButton from "../../../components/AppLoadingButton";

const CreateTutorDrawer = (props) => {
  const theme = useTheme();

  const { open, handleClose } = props;

  const [data, setData] = useState({});

  const handleFileChange = (info) => {
    setData({ ...data, file: info?.file?.originFileObj });
  };
  return (
    <AppDrawer title="Add tutor" open={open} handleClose={handleClose}>
      <Box sx={{ p: 3 }}>
        <Box>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: theme.palette.neutral[50],
            }}
          >
            Tutor logo (64 X 16)
          </Typography>
          <AppDragAndDrop
            label={
              <div className="text-[#77777A]">
                <span className="font-semibold text-[#303034]">
                  Click to upload
                </span>{" "}
                or drag and drop a file
              </div>
            }
            accepts={["images"]}
            draggerProps={{
              onChange: handleFileChange,
            }}
          />
        </Box>
        <AppInput
          name="first_name"
          label="First name"
          large
          type="text"
          sx={{ my: 1 }}
          variant="filled"
          fullWidth
        />
        <AppInput
          name="last_name"
          label="Last name"
          large
          type="text"
          sx={{ my: 1 }}
          variant="filled"
          fullWidth
        />
        <AppInput
          name="email"
          label="Email"
          large
          type="email"
          sx={{ my: 1 }}
          variant="filled"
          fullWidth
        />

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            mt: 2,
            mb: 1,
            color: theme.palette.neutral[50],
          }}
        >
          Bank details
        </Typography>
        <AppInput
          name="bank_name"
          label="Bank name"
          large
          type="text"
          variant="filled"
          sx={{ my: 1 }}
          fullWidth
        />
        <AppInput
          name="account_name"
          label="Account name"
          large
          type="text"
          variant="filled"
          sx={{ my: 1 }}
          fullWidth
        />
        <AppInput
          name="account_number"
          label="Account number"
          sx={{ my: 1 }}
          large
          type="text"
          variant="filled"
          fullWidth
        />
        <AppLoadingButton
          text="Add tutor"
          sx={{
            backgroundColor: theme.palette.primary[30],
            width: "100%",
            color: theme.palette.shades.white,
            mt: 2,
            "&:hover": {
              backgroundColor: theme.palette.primary[30],
              color: theme.palette.shades.white,
            },
          }}
          medium
        />
      </Box>
    </AppDrawer>
  );
};

export default CreateTutorDrawer;
