import { Backdrop } from "@mui/material";

const AppBackdrop = (props) => {
  const { onClose, open, opacity = 0.2 } = props;
  return (
    <Backdrop
      sx={{
        zIndex: 101,
        backgroundColor: `rgba(0,0,0,${opacity})`,
      }}
      open={open}
      onClick={onClose}
    ></Backdrop>
  );
};

export default AppBackdrop;
