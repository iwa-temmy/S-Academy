import { useTheme } from "@mui/material/styles";
import { Box, List } from "@mui/material";

// core component
import Brand from "../../Brand";
import SidebarListItem from "./SidebarListItem";
import ListIcon from "./ListIcon";

const SidebarContent = (props) => {
  const { routes, current } = props;
  // hooks
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Brand />
      <List
        sx={{
          height: "calc(100vh - 108px)",
          overflow: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary[100] + "30",
            borderRadius: "10px",
          },
        }}
      >
        {routes
          .filter((res) => !res.subRoute)
          .map((route) => {
            const isActive =
              (current?.parentKey || current?.key) === route?.key;
            return (
              route?.visible && (
                <SidebarListItem
                  active={isActive}
                  icon={<ListIcon Component={route.icon} />}
                  text={route.name}
                  link={route.path}
                  key={route.key}
                />
              )
            );
          })}
      </List>
    </Box>
  );
};

export default SidebarContent;
