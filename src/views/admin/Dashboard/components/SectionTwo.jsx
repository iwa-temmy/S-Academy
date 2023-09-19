import { Grid, Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Course } from "@carbon/icons-react";

const SectionTwo = () => {
  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      <Grid item xs={12} md={4} lg={4}>
        <CardItem
          icon={<Course />}
          value={3}
          type="courses"
          description="All courses"
        />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <CardItem />
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
        <div className="flex flex-row gap-3">
          <Typography>{value}</Typography>
          <Typography>{type}</Typography>
        </div>
        <Typography>{description}</Typography>
      </Box>
      <Box>{icon}</Box>
    </Stack>
  );
};
export default SectionTwo;
