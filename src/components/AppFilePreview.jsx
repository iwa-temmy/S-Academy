import { useMemo } from "react";
import { Box, IconButton, Typography, Stack, useTheme } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

const AppFilePreview = (props) => {
  const { filename, sx, onClose } = props;
  const theme = useTheme();

  // memos
  const type = useMemo(() => {
    if (!filename) return "";
    const arr = filename?.split(".");
    return arr[arr?.length - 1];
  }, [filename]);

  return filename ? (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderRadius: 1,
        backgroundColor: theme.palette.gray[95],
        py: 1,
        px: 1.5,
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {type === "png" ? (
          <img src={"/fileicons/PNG.svg"} alt="png file" />
        ) : type === "jpg" ? (
          <img src={"/fileicons/JPG.svg"} alt="jpg file" />
        ) : type === "xls" || type === "xlsx" ? (
          <img src={"/fileicons/XLS.svg"} alt="xls file" />
        ) : type === "csv" ? (
          <img src={"/fileicons/CSV.svg"} alt="csv file" />
        ) : type === "mov" ? (
          <img src={"/fileicons/MOV.svg"} alt="mov file" />
        ) : type === "mp3" ? (
          <img src={"/fileicons/MP3.svg"} alt="mp3 file" />
        ) : type === "pdf" ? (
          <img src={"/fileicons/PDF.svg"} alt="pdf file" />
        ) : type === "gif" ? (
          <img src={"/fileicons/GIF.svg"} alt="gif file" />
        ) : type === "txt" ? (
          <img src={"/fileicons/TXT"} alt="txt file" />
        ) : type === "docx" ? (
          <img src={"/fileicons/DOCX.svg"} alt="docx file" />
        ) : null}

        <Typography
          sx={{
            color: theme.palette.neutral[40],
            fontWeight: 500,
            fontSize: "11px",
            pl: 1,
          }}
        >
          {filename}
        </Typography>
      </Box>
      <IconButton sx={{ p: 0 }} onClick={onClose}>
        <CloseRounded fontSize="small" />
      </IconButton>
    </Stack>
  ) : null;
};

export default AppFilePreview;
