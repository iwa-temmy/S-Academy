import { ButtonGroup, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import AppButton from "./AppButton";

import { KeyboardArrowDownRounded } from "@mui/icons-material";
import AppMenu from "./app-menu/AppMenu";
import AppMenuItem from "./app-menu/AppMenuItem";
// import AppMenu from "./app-menu/AppMenu";
// import AppMenu from './app-menu/AppMenu';
// import AppMenuItem from './app-menu/AppMenuItem';

const AppButtonGroup = (props) => {
  const { mainBtnProps = {}, dropdownItems } = props;
  const { sx = {}, ...otherMainBtnProps } = mainBtnProps;
  const groupRef = useRef(null);
  const theme = useTheme();

  // states
  const [anchor, setAnchor] = useState(null);

  // functions
  const openMenu = () => setAnchor(groupRef.current);

  const handleClose = () => setAnchor(null);

  return (
    <>
      <ButtonGroup variant="contained" ref={groupRef}>
        <AppButton
          sx={{
            py: 0.8,
            px: 1.7,
            backgroundColor: theme.palette.primary[20],
            ...sx,
          }}
          {...otherMainBtnProps}
        />
        {dropdownItems && (
          <>
            <AppButton
              icon={<KeyboardArrowDownRounded />}
              sx={{
                px: 1.5,
                py: 1,
                border: `1px solid ${theme.palette.gray[60]}80`,
                "& .MuiButton-startIcon": {
                  m: 0,
                },
              }}
              onClick={openMenu}
            />
            <AppMenu anchor={anchor} onClose={handleClose}>
              {dropdownItems.map((item, idx) => (
                <AppMenuItem
                  key={idx}
                  icon={item.icon}
                  onClick={item.action}
                  label={item.label}
                />
              ))}
            </AppMenu>
          </>
        )}
      </ButtonGroup>
    </>
  );
};

export default AppButtonGroup;
