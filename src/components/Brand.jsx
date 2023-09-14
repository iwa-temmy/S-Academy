import { Box } from "@mui/material";
const Brand = (props) => {
  const { type } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 6,
      }}
    >
      <img src={type === "blue" ? "/img/logo.svg" : "/img/logo-white.svg"} />
    </Box>
  );
};

export default Brand;
