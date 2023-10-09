import React from "react";
// import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useTheme } from "@mui/styles";

const AppProgressBar = (props) => {
  const { value = 0, sx, color } = props;
  const theme = useTheme();
  // return <Progress variant="determinate" value={value} color={color} sx={sx} />;
  return (
    <LinearProgress
      // classes={{
      //   colorPrimary: {
      //     backgroundColor: theme.palette.gray[95],
      //     borderRadius: 5,
      //     height: 8,
      //   },
      //   barColorPrimary: { background: color, borderRadius: 5 },
      // }}
      variant="determinate"
      value={value}
      sx={{
        borderRadius: 5,
        height: 8,
        backgroundColor: theme.palette.gray[95],
        "& .MuiLinearProgress-bar": {
          backgroundColor: color,
          borderRadius: 5,
        },
      }}
    />
  );
};

export default AppProgressBar;
