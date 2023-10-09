import { Box } from "@mui/material";
import React, { useState } from "react";
import SimpleTab from "../../../components/tabs/SimpleTab";
import CustomTabPanel from "../../../components/tabs/CustomTabPanel";

import InProgress from "./InProgressCourses";
import Completed from "./CompletedCourses";
import { CoursesData } from "../data";
import useSearch from "../../../hooks/useSearch";

const Index = () => {
  // state
  const [tab, setTab] = useState(0);

  const handleTabChange = (_, tab) => {
    setTab(tab);
  };

  // constants
  const TABS = [
    { name: "In Progress", id: 0 },
    { name: "Completed", id: 1 },
  ];

  const { data, handleSearch, handleRemoveSearch, keyword } = useSearch(
    CoursesData,
    ["name", "title", "status"]
  );
  return (
    <Box>
      <SimpleTab
        tab={tab}
        handleTabChange={handleTabChange}
        tabs={TABS}
        handleChange={handleSearch}
        handleRemoveSearch={handleRemoveSearch}
        value={keyword}
      />

      <CustomTabPanel value={tab} index={0}>
        <InProgress filteredCoursesData={data} />
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        <Completed filteredCoursesData={data} />
      </CustomTabPanel>
    </Box>
  );
};

export default Index;
