import { useMemo } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Empty } from "antd";

const EmptyState = (props) => {
  const { description } = props;

  const theme = useTheme();

  const moduleEmptyState = useMemo(() => {
    switch (description) {
      case "Find all recent activity here":
        return (
          <Stack direction="column">
            <img
              src="/img/emptyActivities.svg"
              alt="empty activities"
              className="h-[100px] mb-3"
            />
            <Typography
              sx={{
                fontSize: 14,
                color: theme.palette.primary[20],
                fontWeight: 700,
              }}
            >
              {description}
            </Typography>
          </Stack>
        );
      default:
        return <Empty description={description} />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 3,
        width: "100%",
        height: "100%",
      }}
    >
      {moduleEmptyState}
    </Box>
  );
};

export default EmptyState;
