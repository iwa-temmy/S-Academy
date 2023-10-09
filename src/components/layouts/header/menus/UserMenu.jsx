import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  MenuList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
} from "@mui/material";
import { Login } from "@mui/icons-material";
import { Logout } from "../../../../redux/userSlice";

// core components
import AppMenuItem from "../../../app-menu/AppMenuItem";
import Notification from "../../../Notification";

import UserAvatar from "./UserAvatar";
import { toast } from "react-toastify";

const UserMenu = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { handleClose } = props;

  const logout = async () => {
    handleClose();
    const res = await Logout();
    if (res?.success) {
      toast.success(<Notification title="Success" description={res.message} />);
      navigate("/auth/login");
    } else {
      toast.error(
        <Notification
          title="Something went wrong"
          description="We couldn't validate your credentials. Try again!"
        />
      );
    }
  };

  return (
    <Paper
      sx={{
        maxWidth: "100%",
        borderRadius: "8px",
        border: `1px solid ${theme.palette.gray[90]}99`,
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: 270,
      }}
    >
      <MenuList sx={{ p: 0 }}>
        <ListItem>
          <ListItemAvatar>
            <UserAvatar />
          </ListItemAvatar>
          <ListItemText
            primary="Kolade"
            // secondary={user?.email}
            primaryTypographyProps={{
              sx: {
                fontWeight: 600,
                color: theme.palette.primary[20],
                fontSize: 14,
              },
            }}
            secondaryTypographyProps={{
              sx: {
                fontWeight: 500,
                fontSize: 10,
                color: theme.palette.neutral[70],
              },
            }}
          />
        </ListItem>
        <Box sx={{ height: 200 }} />
        <AppMenuItem
          icon={<Login fontSize="small" />}
          label="Log out"
          color={theme.palette.neutral[50]}
          onClick={logout}
          sx={{
            borderTop: `0.5px solid ${theme.palette.gray[90]}7f`,
            py: 1.8,
          }}
        />
      </MenuList>
    </Paper>
  );
};

export default UserMenu;
