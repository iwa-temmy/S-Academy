import { useTheme } from "@mui/material/styles";
import { Box, Tooltip } from "@mui/material";

const AppOpaqueTag = (props) => {
  const theme = useTheme();

  const {
    label,
    type,
    sx = {},
    icon,
    borderRadius,
    tag,
    tooltip,
    tipPosition,
    hasArrow,
  } = props;

  const tagTheme = {
    success: { bg: "#005f3d0f", color: theme.palette.success[60] },
    error: { bg: theme.palette.error[95], color: theme.palette.error[60] },
    warning: {
      bg: theme.palette.tertiary[95],
      color: theme.palette.tertiary[40],
    },
    default: {
      bg: theme.palette.shades.white,
      color: theme.palette.neutral[50],
    },
  };

  return (
    <Box
      component="span"
      sx={{
        color: tagTheme[type]?.color,
        background: tagTheme[type]?.bg,
        border: type === "default" ? `1px solid ${theme.palette.gray[90]}` : "",
        borderRadius: borderRadius || 1,
        px: 1,
        py: 0.5,
        textTransform: "capitalize",
        maxWidth: 100,
        fontWeight: 600,
        fontSize: 10,
        whiteSpace: "nowrap",
        ...sx,
      }}
    >
      {tooltip ? (
        <Tooltip
          title={tooltip}
          placement={tipPosition}
          arrow={hasArrow}
          slotProps={{
            tooltip: {
              sx: {
                color: "#FFFFFF",
                backgroundColor: "#303034",
              },
            },
          }}
        >
          <span>
            {icon}
            {label}
            {tag}
          </span>
        </Tooltip>
      ) : (
        <span>
          {icon}
          {label}
          {tag}
        </span>
      )}
    </Box>
  );
};

export default AppOpaqueTag;
