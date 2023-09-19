import { Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import AppButton from "../../../../components/AppButton";

const SectionOne = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      sx={{
        background: theme.palette.primary[95],
        height: "354px",
        p: { xs: 4, md: 8 },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 36 },
            fontWeight: 600,
            lineHeight: "44px",
            color: theme.palette.primary[40],
          }}
        >
          Create a course, hire tutors, and observe students
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "0.25px",
            color: theme.palette.neutral[30],
          }}
        >
          Manage your tutors, create courses, give quizzes and monitor tutors
          all in one place
        </Typography>
        <AppButton
          name="Add course"
          color="primary"
          sx={{
            background: theme.palette.primary[20],
            color: theme.palette.shades.white,
            my: 3,
            "&:hover": {
              background: theme.palette.primary[20],
              color: theme.palette.shades.white,
            },
          }}
          onClick={() => navigate("/admin/courses")}
        />
      </Box>
      <img
        src="/img/young-woman-with-laptop-studying-online.svg"
        alt="young woman with laptop studying online"
        className="hidden lg:block"
      />
    </Stack>
  );
};

export default SectionOne;
