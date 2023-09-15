import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

const ProfileInfoItem = ({ name, value }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.1px",
          color: theme.palette.neutral[40],
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.primary[30],
          fontSize: 9,
          fontWeight: 400,
          letterSpacing: "0.1px",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default ProfileInfoItem;
