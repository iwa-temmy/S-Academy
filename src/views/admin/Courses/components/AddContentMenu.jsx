import { useRef, useState, useEffect } from "react";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  MenuItem,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import {
  AddCircleOutlineOutlined,
  SlowMotionVideo,
  QuizOutlined,
} from "@mui/icons-material";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialVimeoCircular } from "react-icons/ti";
import AppButton from "../../../../components/AppButton";

const AddContentMenu = (props) => {
  const { chapter } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div>
      <AppButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        variant="text"
        color="secondary"
        startIcon={<AddCircleOutlineOutlined />}
        sx={{
          fontSize: 10,
          minWidth: "unset",
          fontWeight: 500,
          p: 0,
          color: theme.palette.neutral[50],
          "& .MuiButton-startIcon": {
            "& svg": {
              fontSize: 14,
            },
          },
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        }}
        name="Add content"
        onClick={handleToggle}
      >
        Dashboard
      </AppButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: 80 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  sx={{ width: 300, p: 2 }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: theme.palette.neutral[50],
                    }}
                  >
                    Add content as:
                  </Typography>

                  <CustomMenuItem
                    startIcon={<SlowMotionVideo />}
                    onClick={(e) => {
                      console.log(chapter);
                      handleClose(e);
                    }}
                    name="Video upload from computer"
                  />
                  <CustomMenuItem
                    startIcon={<AiOutlineYoutube size="24px" />}
                    name="Embedded youtube video"
                    onClick={(e) => {
                      console.log(chapter);
                      handleClose(e);
                    }}
                  />
                  <CustomMenuItem
                    startIcon={<TiSocialVimeoCircular size="24px" />}
                    name="Embedded vimeo video"
                    onClick={(e) => {
                      console.log(chapter);
                      handleClose(e);
                    }}
                  />
                  <CustomMenuItem
                    startIcon={<QuizOutlined />}
                    name="Quiz"
                    onClick={(e) => {
                      console.log(chapter);
                      handleClose(e);
                    }}
                  />
                  <CustomMenuItem
                    startIcon={<img src="/icons/documentOutlineIcon.svg" />}
                    onClick={(e) => {
                      console.log(chapter);
                      handleClose(e);
                    }}
                    name="Downloadable Docs"
                  />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

const CustomMenuItem = (props) => {
  const { onClick, name, startIcon } = props;

  const theme = useTheme();
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        border: `1px solid ${theme.palette.neutral[95]}`,
        my: 1.2,
        p: 0.5,
        borderRadius: "4px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        sx={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.1px",
          color: theme.palette.neutral[40],
        }}
      >
        {startIcon} {name}
      </Stack>
      <Box
        sx={{
          border: `1px solid ${theme.palette.neutral[90]}`,
          width: "fit-content",
          fontSize: 10,
          fontWeight: 400,
          px: 0.5,
          py: 1,
          borderRadius: "4px",
          color: theme.palette.primary[30],
        }}
      >
        Add
      </Box>
    </MenuItem>
  );
};
export default AddContentMenu;
