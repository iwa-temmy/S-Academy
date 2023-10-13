import { Box, Drawer, Stack } from "@mui/material";
import { useTheme } from "@mui/styles";
import { KeyboardArrowLeft } from "@mui/icons-material";

const AppDrawer = (props) => {
  const {
    open,
    handleClose,
    children,
    sx,
    title,
    action,
    width,
    borderRadius,
  } = props;
  const theme = useTheme();
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{ ...sx }}
      PaperProps={{
        sx: {
          borderRadius: borderRadius,
        },
      }}
    >
      <Stack sx={{ minWidth: "640px", borderRadius: "30px", width: width }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            px: 3,
            py: 2,
            boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Stack direction="row" alignItems="center">
            <KeyboardArrowLeft
              sx={{ cursor: "pointer" }}
              onClick={() => handleClose()}
            />
            <Box
              sx={{
                fontWeight: 600,
                fontSize: 15,
                color: theme.palette.neutral[40],
                pl: 2,
              }}
            >
              {title}
            </Box>
          </Stack>
          {action ? <Box>{action}</Box> : null}
        </Stack>
        <Stack>{children}</Stack>
      </Stack>
    </Drawer>
  );
};

export default AppDrawer;
