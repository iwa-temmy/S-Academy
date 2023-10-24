import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import { Data } from "../data";
import VerifiedIcon from "@mui/icons-material/Verified";
import AppCard from "../../../components/Cards/AppCard";

const Dashbard = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mx: 3, my: 3 }}>
      <AppCard
        elevation={0}
        sx={{
          backgroundColor: theme.palette.primary[95],
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "none",
          py: 4,
          px: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: theme.palette.primary[40],
              fontWeight: 700,
              fontSize: "36px",
            }}
          >
            Grow your skills and advance you knowledge
          </Typography>
          <Typography
            sx={{
              color: theme.palette.neutral[30],
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Instructors from around the world teach millions of students on
            Smartcomply Academy. We provide the tools and <br /> skills to teach
            what you love
          </Typography>
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
          >
            Explore
          </Button>
        </Box>
        <img src={"/icons/ReadingMan.svg"} alt="reading" />
      </AppCard>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {Data.map((item) => (
          <Grid key={item.id} item sm={12} lg={4} md={4}>
            <AppCard
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignitems: "center",
                border: `1px solid ${theme.palette.gray[90]}`,
                boxShadow: "none",
                px: 3,
                py: 5,
              }}
              elevation={0}
            >
              <Box>
                <Stack direction="row" alignItems="center">
                  <Typography
                    sx={{
                      color: theme.palette.neutral[20],
                      fontSize: "40px",
                      fontWeight: "700",
                    }}
                  >
                    {item?.no_of_courses}{" "}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: "#919094",
                      fontSize: "12px",
                      fontWeight: "500",
                      ml: 0.5,
                    }}
                  >
                    courses
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: theme.palette.primary[20],
                    fontSize: "16px",
                    fontWeight: "600",
                    mt: 2,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Box sx={{ position: "relative" }}>
                <Button
                  sx={{
                    backgroundColor: "#E3EDFF50",
                    brderRadius: "4px",
                    width: "20px !important",
                    height: "60px",
                    "&:hover": {
                      backgroundColor: "#E3EDFF50",
                    },
                  }}
                >
                  <img src={"/icons/Carbon.svg"} width="23" />
                </Button>
                {item?.tag === "completed" ? (
                  <VerifiedIcon
                    sx={{
                      position: "absolute",
                      top: "-10px",
                      right: "-5px",
                      width: "15px",
                      height: "15px",
                    }}
                    color="success"
                  />
                ) : item?.tag === "pending" ? (
                  <img
                    src={"/icons/Loading.svg"}
                    alt="loading"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-5px",
                      width: "15px",
                      height: "15px",
                    }}
                  />
                ) : null}
              </Box>
            </AppCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashbard;
