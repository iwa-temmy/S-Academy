import { Stack } from "@mui/material";
import AppButton from "../../../../components/AppButton";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

import { useTheme } from "@mui/styles";

const CourseContentModalActions = (props) => {
  const { addCourseChapter, deleteLastChapter, chapters, index } = props;

  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ my: 1, px: 1 }}>
      {chapters?.length - 1 === index ? (
        <AppButton
          variant="text"
          color="secondary"
          startIcon={<AddCircle />}
          disableRipple
          sx={{
            fontSize: 10,
            minWidth: "unset",
            fontWeight: 500,
            p: 0,
            color: theme.palette.primary.main,
            "& .MuiButton-startIcon": {
              "& svg": {
                fontSize: 14,
              },
            },
            "&:hover": {
              backgroundColor: "transparent !important",
            },
          }}
          onClick={addCourseChapter}
          name="Add another chapter"
        />
      ) : null}

      <AppButton
        variant="text"
        color="secondary"
        startIcon={<RemoveCircle />}
        disableRipple
        sx={{
          fontSize: 10,
          minWidth: "unset",
          fontWeight: 500,
          p: 0,
          color: theme.palette.error[60],
          "& .MuiButton-startIcon": {
            "& svg": {
              fontSize: 14,
            },
          },
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        }}
        name="Remove chapter"
        onClick={deleteLastChapter}
        disabled={!chapters?.length}
      />
    </Stack>
  );
};

export default CourseContentModalActions;
