import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TabLayout from "./TabLayout";

const RouteTabLayout = (props) => {
  const { tabs, children, onTabChange, tab, ...otherProps } = props;
  // hooks
  const { pathname } = useLocation();

  // useEffect
  useEffect(() => {
    if (!pathname || !tabs?.length) return;
    const arr = pathname.split("/");
    const current = arr[arr?.length - 1];
    const tab = tabs.find((tab) => tab?.key === current);
    onTabChange(tab?.id || 0);
  }, [pathname, tabs]);

  return (
    <TabLayout
      onTabChange={onTabChange}
      tabs={tabs}
      link
      tab={tab}
      {...otherProps}
    >
      {children}
    </TabLayout>
  );
};

export default RouteTabLayout;
