import React, { useState } from "react";
import AppTabPanel from "../../../components/tabs/AppTabPanel";
import TabLayout from "../../../components/tabs/TabLayout";
import Account from "./Account";

const Settings = () => {
  // state
  const [currentTab, setCurrentTab] = useState(0);

  // logic function
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const tabs = [
    {
      name: "Account",
      id: 0,
    },
    {
      name: "2FA",
      id: 1,
    },
  ];
  return (
    <TabLayout onTabChange={handleTabChange} tab={currentTab} tabs={tabs}>
      <AppTabPanel value={currentTab} index={0}>
        <Account />
      </AppTabPanel>
      <AppTabPanel value={currentTab} index={1}>
        <Account />
      </AppTabPanel>
    </TabLayout>
  );
};

export default Settings;
