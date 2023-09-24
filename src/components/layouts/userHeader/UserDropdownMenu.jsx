import { Box } from "@mui/material";

//core components
import AppBackdrop from "../../AppBackdrop";
import UserMenu from "./menus/UserMenu";
import AppAnimate from "../../AppAnimate";

const UserDropdownMenu = (props) => {
  const { menuOpen, handleClose } = props;
  return (
    <Box sx={{ position: "absolute", right: 0, top: 0 }}>
      <AppBackdrop onClose={handleClose} open={menuOpen} opacity={0} />
      <AppAnimate type="fade" in={menuOpen}>
        <Box
          sx={{
            position: "absolute",
            zIndex: "102",
            top: 70,
            right: 20,
          }}
        >
          {/* <UserMenu handleClose={handleClose} /> */}
        </Box>
      </AppAnimate>
    </Box>
  );
};

export default UserDropdownMenu;
