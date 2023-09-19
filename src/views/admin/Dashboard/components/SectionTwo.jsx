import { Grid, Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Course } from "@carbon/icons-react";

const SectionTwo = () => {
  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      <Grid item xs={12} md={4} lg={4}>
        <CardItem
          icon={<Course size={32} className="fill-[#1D438F]" />}
          value={3}
          type="courses"
          description="All courses"
        />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <CardItem
          icon={<img src="/icons/UserGroupIcon.svg" alt="usergroup icon" />}
          value={2}
          type="student"
          description="Registered students"
        />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <CardItem
          icon={<img src="/icons/TutorsIcon.svg" alt="usergroup icon" />}
          value={1}
          type="tutors"
          description="Tutors"
        />
      </Grid>
    </Grid>
  );
};

const CardItem = ({ icon, value, type, description }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        border: `1px solid ${theme.palette.neutral[90]}`,
        px: "39px",
        py: "31px",
        borderRadius: "4px",
      }}
    >
      <Box>
        <div className="flex flex-row items-center gap-3">
          <Typography sx={{ fontSize: 40, fontWeight: 700 }}>
            {value}
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 500,
              color: theme.palette.neutral[60],
            }}
          >
            {type}
          </Typography>
        </div>
        <Typography
          sx={{
            color: theme.palette.primary[20],
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box sx={{ background: "#E3EDFF80", p: 1, borderRadius: "8px" }}>
        {icon}
      </Box>
    </Stack>
  );
};
export default SectionTwo;
