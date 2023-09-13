import { Slide, Fade, Grow, Collapse, Zoom, Box } from "@mui/material";
import { forwardRef } from "react";

const getAnimationComponent = (type) => {
  switch (type) {
    case "slide":
      return Slide;
    case "fade":
      return Fade;
    case "grow":
      return Grow;
    case "collapse":
      return Collapse;
    case "zoom":
      return Zoom;
    default:
      return <></>;
  }
};

// eslint-disable-next-line react/display-name
const AppAnimate = forwardRef((props, ref) => {
  const { children, type, ...restProps } = props;
  const animationComponent = getAnimationComponent(type);

  return (
    <Box
      component={animationComponent}
      mountOnEnter
      unmountOnExit
      {...restProps}
      ref={ref}
    >
      {children}
    </Box>
  );
});

export default AppAnimate;
