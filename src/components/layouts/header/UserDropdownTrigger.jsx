import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
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

const UserDropdownTrigger = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const history = useNavigate();
  const location = useLocation();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    if (location.pathname?.includes("user")) {
      history("user/login");
    } else {
      history("/admin/login");
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
              {location.pathname?.includes("user") ? "User" : "Administrator"}
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
            <Typography
              sx={{ fontSize: "10px", fontWeight: 500, color: "#0A3783" }}
            >
              Admin
            </Typography>
            <ListItemText
              primary="Adminstrator"
              secondary="Administrator@smartcomplyacademy.com"
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
            history.push("/merchant/settings");
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
