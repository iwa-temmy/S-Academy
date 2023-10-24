import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import SimpleTab from "../../../../components/tabs/SimpleTab";
import CustomTabPanel from "../../../../components/tabs/CustomTabPanel";
import AppCard from "../../../../components/Cards/AppCard";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { CoursesData } from "../../data";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/styles";

const VideoSection = () => {
  const theme = useTheme();
  const vidRef = useRef(null);
  const params = useParams();
  const perPage = 1;
  const [page_length, setPage_length] = useState(1);
  const [tab, setTab] = useState(0);

  const handleTabChange = (_, tab) => {
    setTab(tab);
  };

  // constants
  const TABS = [
    { name: "About this chapter", id: 0 },
    { name: "Quiz", id: 1 },
    { name: "Materials", id: 2 },
  ];

  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  const one_course = CoursesData?.find((course) => course?.id === params?.id);
  console.log({ one_course });
  const handleNext = () => {
    if (page_length === one_course?.pages?.length) {
      setPage_length(page_length);
    } else {
      setPage_length(page_length + 1);
    }
  };
  const handlePrevious = () => {
    if (page_length === 1) {
      setPage_length(page_length);
    } else {
      setPage_length(page_length - 1);
    }
  };

  return (
    <AppCard>
      <Box sx={{ position: "relative" }}>
        {/* <video
          controls
          width="100%"
          controlsList="play timeline volume nodownload"
          style={{ height: 350 }}
          loop
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <Box>
          <CardMedia
            component="video"
            image={one_course?.video}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(57, 57, 59, 0.3)",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#303034",
              p: 0.5,
            }}
          >
            <ArrowBackIosIcon
              sx={{
                color: "#ffffff",
                width: "15px",
                ml: 1,
              }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "#303034",
              color: "#ffffff",
              ml: 1,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: "11px", fontWeight: 700 }}>
              Previous:{" "}
              <span style={{ color: "#cfc9c9" }}>
                Learning steps of installation
              </span>
            </Typography>
          </Box>
        </Box>
        <PlayCircleIcon
          onClick={handlePlayVideo}
          sx={{
            color: "#ffffff",
            width: "60px",
            height: "60px",
            position: "absolute",
            top: "46%",
            left: "47%",
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            display: "flex",
            alignItems: "center",
            right: 0,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#303034",
              color: "#ffffff",
              mr: 1,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: "11px", fontWeight: 700 }}>
              Previous:{" "}
              <span style={{ color: "#cfc9c9" }}>
                Learning steps of installation
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#303034",
              p: 0.5,
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                color: "#ffffff",
                width: "15px",
                ml: 1,
              }}
            />
          </Box>
        </Box>
      </Box>
      <CardContent sx={{ mt: 2 }}>
        {one_course?.pages
          ?.sort((a, b) => a?.id - b?.id)
          ?.slice(page_length * perPage - perPage, page_length * perPage)
          ?.map((page) => (
            <Box key={page?.id} sx={{ mt: 2 }}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: theme.palette.primary[20],
                      }}
                    >
                      {page?.id}. {page?.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: theme.palette.primary[20],
                        }}
                      >
                        Introduction to: {page?.description}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: 500,
                          color: theme.palette.neutral[40],
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <QueryBuilderIcon sx={{ mx: 0.5, width: "15px" }} />
                        <span>{page?.time}</span>
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifycontent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#eeecec",
                        width: "25px",
                        borderRadius: "50%",
                        cursor: page_length === 1 ? "" : "pointer",
                      }}
                      onClick={handlePrevious}
                    >
                      <ArrowBackIosIcon
                        sx={{ width: "15px", ml: 1, color: "#5E5E62" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#eeecec",
                        width: "25px",
                        borderRadius: "50%",
                        ml: 1,
                        cursor:
                          page_length === one_course?.pages?.length
                            ? ""
                            : "pointer",
                      }}
                      onClick={handleNext}
                    >
                      <ArrowForwardIosIcon
                        sx={{ width: "15px", ml: 0.8, color: "#5E5E62" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 3 }}>
                <SimpleTab
                  tab={tab}
                  handleTabChange={handleTabChange}
                  tabs={TABS}
                />
                <CustomTabPanel value={tab} index={0} sx={{ ml: "3rem" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: theme.palette.neutral[50],
                    }}
                  >
                    {page?.about}
                  </Typography>
                  <br />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: theme.palette.neutral[50],
                    }}
                  >
                    {page?.about_1}
                  </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={tab} index={1}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: theme.palette.neutral[50],
                    }}
                  >
                    {page?.quiz}
                  </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={tab} index={2}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: theme.palette.neutral[50],
                    }}
                  >
                    {page?.material}
                  </Typography>
                </CustomTabPanel>
              </Box>
            </Box>
          ))}
      </CardContent>
    </AppCard>
  );
};

export default VideoSection;
