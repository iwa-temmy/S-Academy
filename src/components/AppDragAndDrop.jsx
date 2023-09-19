import { Box, useTheme } from "@mui/material";
import { Upload } from "antd";
import { accept } from "../utils/utils";
import { useMemo } from "react";

const { Dragger } = Upload;
const AppDragAndDrop = (props) => {
  const { label, icon, sx = {}, draggerProps = {}, accepts = [] } = props;
  const theme = useTheme();

  const acceptedFormat = useMemo(() => {
    const formats = accepts?.map((key) => accept?.[key]);
    return formats?.join(",");
  }, [accepts]);

  // constant
  const draggers = {
    name: "file",
    action: null,
    multiple: false,
    accept: acceptedFormat,
    ...draggerProps,
  };

  return (
    <Box
      component={Dragger}
      sx={{
        "&.ant-upload-wrapper": {
          width: "100%",
        },
        "& .ant-upload": {
          border: "none",
        },
        "& .ant-upload-list": {
          display: "none",
        },
      }}
      {...draggers}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${theme.palette.neutral[80]}8f`,
          backgroundColor: "transparent",
          borderRadius: 2,
          py: 2,
          px: 1.5,
          ...sx,
        }}
      >
        {icon || (
          <img
            src="/icons/UploadOutlinedIcon.svg"
            alt="cloud upload"
            width={22}
          />
        )}
        {label}
      </Box>
    </Box>
  );
};

export default AppDragAndDrop;
