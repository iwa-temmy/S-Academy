import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Menu } from "@mui/icons-material";
import UserDropdown from "./UserDropdown";
const Header = (props) => {
  const { openDrawer, title } = props;
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: "calc(100% - 120px)" },
        ml: { md: 120 },
        backgroundColor: theme.palette.white.main,
        justifyContent: "center",
        height: 65,
        boxShadow: "none",
        zIndex: 800,
        borderBottom: `1px solid ${theme.palette.neutral[80]}7b`,
      }}
    >
      <Toolbar sx={{ gap: 1.5 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={openDrawer}
          sx={{ display: { md: "none" } }}
        >
          <Menu color="primary" sx={{ fontSize: "2rem" }} />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h1"
            noWrap
            component="h1"
            sx={{
              m: 0,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          {/* <AppBreadcrumbs crumbs={breadcrumbs} /> */}
        </Box>
        <IconButton sx={{ borderRadius: "4px" }}>
          <img
            src="/icons/notificationIcon.svg"
            alt="notification icon"
            className="h-[18px]"
          />
        </IconButton>
        {/* <TipsEnableButton /> */}
        <UserDropdown />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
