import { Tabs } from "antd";
import { useMemo } from "react";

const AdminTab = (props) => {
  const { items } = props;
  const tabItems = useMemo(() => {
    return items.map((item) => {
      return {
        key: item.key,
        label: (
          <span>
            {item.icon} {item.label}
          </span>
        ),
        children: item.children,
      };
    });
  }, [items]);

  return <Tabs defaultActiveKey="1" items={tabItems} />;
};

export default AdminTab;
