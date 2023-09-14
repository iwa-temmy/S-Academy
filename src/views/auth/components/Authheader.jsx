import { Typography } from "@mui/material";
const Authheader = ({ text }) => {
  return (
    <>
      <img src="/img/logo.svg" alt="logo" className="w-[48px]" />
      <Typography sx={{ fontSize: "20px", pt: 2, fontWeight: 600 }}>
        {text}
      </Typography>
    </>
  );
};

export default Authheader;
