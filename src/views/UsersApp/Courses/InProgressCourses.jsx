import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import AppCard from "../../../components/cards/AppCard";
import AppProgressBar from "../../../components/AppProgressBar";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useNavigate } from "react-router-dom";

const InProgress = ({ filteredCoursesData }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const inProgressCourses = filteredCoursesData?.filter(
    (course) => course.status === "progress"
  );
  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={2}>
        {inProgressCourses.map((data) => (
          <Grid key={data.id} item sm={12} lg={6} md={6}>
            <AppCard sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/img/CourseImage.png"
                alt="course Image"
              />
              <CardContent sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between !important",
                  }}
                >
                  <img src="/icons/SmallLogo.svg" alt="small Logo" />
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: theme.palette.neutral[50],
                      backgroundColor: theme.palette.gray[95],
                      border: "5px dotted #f8f8f8",
                      borderRadius: "2px",
                    }}
                  >
                    {data.certificate}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: theme.palette.neutral[20],
                    mt: 1,
                  }}
                >
                  {data.name}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <AppProgressBar value={parseInt(data?.percentage)} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: theme.palette.neutral[60],
                      }}
                    >
                      Overall Progress
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: theme.palette.neutral[60],
                      }}
                    >
                      {data.percentage}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: theme.palette.neutral[40],
                      }}
                    >
                      Now Learning:{" "}
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "#919094",
                        }}
                      >
                        {data?.title}
                      </span>
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<PlayCircleOutlineIcon />}
                      sx={{
                        textTransform: "none",
                        width: "100px",
                        height: "30px",
                      }}
                      onClick={() => navigate(`/user/courses/${data?.id}`)}
                    >
                      Resume
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </AppCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InProgress;
