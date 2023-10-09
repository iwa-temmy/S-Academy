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
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const CompletedCourses = ({ filteredCoursesData }) => {
  const theme = useTheme();
  const completedCourses = filteredCoursesData?.filter(
    (course) => course.status === "completed"
  );
  return (
    <Box sx={{ mx: 3, my: 3 }}>
      <Grid container spacing={2}>
        {completedCourses.map((data) => (
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
                  <AppProgressBar
                    value={parseInt(data?.percentage)}
                    color={"#37A372"}
                  />
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
                      {data.percentage === "100%"
                        ? "completed"
                        : data.percentage}
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
                      You are now certifified
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<BookmarkBorderIcon />}
                      sx={{ textTransform: "none" }}
                    >
                      Download Certificate
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

export default CompletedCourses;
