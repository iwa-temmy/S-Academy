import { LoadingButton } from "@mui/lab";

const AppLoadingButton = (props) => {
  const { text, sx, small, medium, large, extraLarge, upload, ...restProps } =
    props;

  // Input Height Variant
  const heightValue = small || medium || large || extraLarge || upload;

  let height;
  switch (heightValue) {
    case upload:
      height = "24px";
      break;
    case small:
      height = "38px";
      break;
    case medium:
      height = "48px";
      break;
    case large:
      height = "56px";
      break;
    case extraLarge:
      height = "64px";
  }
  return (
    <LoadingButton
      {...restProps}
      sx={{
        textTransform: "unset",
        py: 1,
        px: 2.4,
        fontWeight: "600",
        ...sx,
        height: height ? height : 40,
      }}
    >
      {text}
    </LoadingButton>
  );
};

export default AppLoadingButton;
