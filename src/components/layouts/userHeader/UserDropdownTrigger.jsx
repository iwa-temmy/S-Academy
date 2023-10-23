import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Menu,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import AppMenuItem from "../../app-menu/AppMenuItem";
import UserAvatar from "./menus/UserAvatar";
import { Logout } from "../../../redux/slices/userSlice";
import Notification from "../../Notification";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const UserDropdownTrigger = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    handleClose();
    const res = await Logout();
    if (res?.success) {
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
    <Box>
      <Box
        component="button"
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "fit-content",
          border: "none",
          color: theme.palette.primary[900],
        }}
      >
        <UserAvatar
          src="/img/userCircleOutline.svg"
          size={24}
          variant="square"
        />
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Stack sx={{ px: 1.5 }}>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{
                textTransform: "capitalize",
                fontWeight: 700,
                fontSize: 12,
                textAlign: "left",
                color: theme.palette.primary.main,
              }}
            >
              {user?.first_name} {user?.last_name}
            </Typography>
          </Stack>
          <ExpandMore color="primary" />
        </Box>
      </Box>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <ListItem sx={{ mb: 1.5 }}>
          <ListItemAvatar>
            <Avatar src="/img/userCircleOutline.svg" size={24} />
          </ListItemAvatar>
          <Box>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#0A3783",
                    textTransform: "capitalize",
                  }}
                >
                  {user?.user_type}
                </Typography>
              }
              secondary={user?.email}
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
          </Box>
        </ListItem>
        <AppMenuItem
          icon={<img src="/icons/settings.svg" alt="img" />}
          label="Settings"
          color="#46464A"
          sx={{
            py: 1.8,
            fontSize: "13px",
            fontWeight: 500,
          }}
          onClick={() => {
            navigate("/user/settings");
            handleClose();
          }}
        />
        <AppMenuItem
          icon={<img src="/icons/logout.svg" alt="img" />}
          label="Log out"
          color="#46464A"
          sx={{
            py: 1.8,
            fontSize: "13px",
            fontWeight: 500,
          }}
          onClick={logout}
        />
      </Menu>
    </Box>
  );
};

export default UserDropdownTrigger;
