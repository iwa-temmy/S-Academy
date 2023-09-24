import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useTheme } from "@mui/styles";

const EmptyDashboard = ({ setOpen }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        my: 5,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ErrorOutlineIcon
          color="error"
          sx={{ width: "15px", height: "15px" }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            color: theme.palette.gray[15],
            ml: 0.5,
          }}
        >
          You currently have no course
        </Typography>
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "34px",
            color: theme.palette.neutral[20],
          }}
        >
          Nurturing Curiosity and Igniting Brilliance
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            color: theme.palette.neutral[20],
            ml: "-3rem",
            mt: 1,
          }}
        >
          In this digital age, the need for robust cybersecurity measures has
          become paramount. <br /> Cybersecurity courses are not just about
          learning technical skills; they are a crucial step towards <br />{" "}
          safeguarding our data, privacy, and even the very foundations of our
          digital society.
        </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary[30],
          color: theme.palette.shades.white,
          textTransform: "none",
          borderRadius: "4px",
          mt: 3,
          width: "120px",
          height: "45px",
          "&:hover": {
            backgroundColor: theme.palette.primary[30],
            color: theme.palette.shades.white,
          },
        }}
        onClick={() => setOpen(true)}
      >
        Explore
      </Button>
      ;
    </Box>
  );
};

export default EmptyDashboard;
