import { Box, Grid } from "@mui/material";
import React from "react";
import VideoSection from './VideoSection'

const CoureView = () => {
  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={8} md={8}>
          <VideoSection />
        </Grid>
        <Grid item sm={12} lg={4} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default CoureView;
