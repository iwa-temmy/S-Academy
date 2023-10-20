import { Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import AppButton from "../../../../components/AppButton";
const EmptyChapter = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 10 }}
    >
      <img
        src="/icons/chapterAddIcon.svg"
        alt="Chapter icon"
        className="w-[192px]"
      />

      <Box sx={{ textAlign: "center", mt: 4, mb: 5 }}>
        <Typography
          sx={{
            color: theme.palette.neutral[30],
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.25px",
            mb: 4,
          }}
        >
          No chapter added
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 400,
            color: theme.palette.neutral[30],
            letterSpacing: "0.25px",
          }}
        >
          After adding a chapter, proceed to adding content in those chapters
        </Typography>
      </Box>
      <AppButton variant="contained" color="primary" name="Add chapter" />
    </Stack>
  );
};

export default EmptyChapter;
