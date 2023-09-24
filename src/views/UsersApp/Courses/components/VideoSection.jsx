import { Box, CardMedia, Grid } from "@mui/material";
import React, { useRef } from "react";
import AppCard from "../../../../components/cards/AppCard";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VideoSection = () => {
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  return (
    <AppCard>
      <Box sx={{ position: "relative", background: '#FDFDFD' }}>
        <video
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
        </video>
        <Box sx={{ position: "absolute", top: "50%", left: "50%" }}>
          <PlayCircleIcon />
        </Box>
      </Box>
    </AppCard>
  );
};

export default VideoSection;
