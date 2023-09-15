import { Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import AppButton from "../../../components/AppButton";
const AdminDashboard = () => {
  const navigate = useNavigate(() => {});
  const theme = useTheme();
  return (
    <>
      <Stack
        sx={{ background: theme.palette.primary[95], height: "354px", p: 8 }}
      >
        <Box>
          <Typography>
            Create a course, hire tutors, and observe students
          </Typography>
          <Typography>
            Manage your tutors, create courses, give quizzes and monitor tutors
            all in one place
          </Typography>
          <AppButton
            name="Add course"
            color="primary"
            sx={{
              background: theme.palette.primary[20],
              color: theme.palette.shades.white,
              "&:hover": {
                background: theme.palette.primary[20],
                color: theme.palette.shades.white,
              },
            }}
            onClick={() => navigate("/admin/tutors")}
          />
        </Box>
      </Stack>
    </>
  );
};

export default AdminDashboard;
