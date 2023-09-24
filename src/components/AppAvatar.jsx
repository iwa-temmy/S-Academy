import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Avatar, CircularProgress, Typography } from "@mui/material";
import { AddPhotoAlternate, CameraAlt } from "@mui/icons-material";

import { fileToBase64 } from "../utils";

const AppAvatar = (props) => {
  const theme = useTheme();
  const {
    id,
    editable,
    src,
    onChange,
    loading,
    file,
    imageFileRef,
    label,
    size = 110,
    alt,
    borderColor,
    variant,
  } = props;

  const [newUploadUrl, setNewUploadUrl] = useState(null);

//   useEffect(() => {
//     if (!file) return null;
//     (async () => {
//       const url = await fileToBase64(file);
//       setNewUploadUrl(url);
//     })();
//   }, [file]);

  return (
    <>
      {label && (
        <Typography
          component="span"
          sx={{
            color: theme.palette.gray[900],
            fontSize: 14,
            display: "block",
            mb: 1,
          }}
        >
          {label}
        </Typography>
      )}
      <Box
        sx={{
          position: "relative",
          m: 0,
          border: borderColor ? `2px solid ${borderColor}` : "none",
        }}
        component="label"
        htmlFor={id}
      >
        <Avatar
          src={newUploadUrl || src || "/img/pfp.png"}
          sx={{
            width: size,
            height: size,
            borderRadius: variant === "circular" ? "50%" : "8px",
            overflow: "hidden",
          }}
          alt={alt || ""}
          variant={variant}
        />
        {editable && (
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: 90,
              width: 32,
              height: 32,
              backgroundColor:
                variant === "circular"
                  ? theme.palette.primary[10]
                  : theme.palette.white.main,
              borderRadius: "50%",
              transition: "opacity 0.3s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <input
              id={id}
              name={id}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onChange}
              disabled={loading}
              ref={imageFileRef}
            />
            {loading ? (
              <CircularProgress sx={{ color: theme.palette.gray[500] }} />
            ) : variant === "circular" ? (
              <CameraAlt
                sx={{ color: theme.palette.white.main, fontSize: 20 }}
              />
            ) : (
              <AddPhotoAlternate
                sx={{ color: theme.palette.primary[20], fontSize: 25 }}
              />
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default AppAvatar;
