import {
  Box,
  Divider,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

const SimpleTab = ({
  tab,
  handleTabChange,
  tabs,
  handleChange,
  handleRemoveSearch,
  value,
}) => {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  console.log({ tab, tabs });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tabs
          value={tab}
          onChange={handleTabChange}
          sx={{
            mx: 3,
            "&.MuiTabs-root": {
              minHeight: "10px",
              maxHeight: "40px",
              px: 0,
            },
          }}
          TabIndicatorProps={{
            sx: {
              height: "3px",
              backgroundColor: "#395BA9",
              width: "100%",
            },
          }}
        >
          {tabs?.map((tab_, index) => {
            return (
              <Tab
                label={tab_.name}
                key={index}
                {...a11yProps(index)}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  fontWeight: 500,
                  px: 0,
                  minWidth: "50px",
                  maxWidth: "120px",
                  mx: 1.5,
                  "&.Mui-selected": {
                    color: "#395BA9",
                  },
                }}
              />
            );
          })}
        </Tabs>
        <TextField
          variant="standard"
          placeholder="Type to search..."
          value={value}
          onChange={handleChange}
          sx={{ marginRight: 4, width: "200px" }}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CancelIcon
                  sx={{ width: "15px", height: "15px", cursor: "pointer" }}
                  onClick={handleRemoveSearch}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Divider sx={{ mt: "-0.1rem", mx: 4.3 }} />
    </Box>
  );
};

export default SimpleTab;
