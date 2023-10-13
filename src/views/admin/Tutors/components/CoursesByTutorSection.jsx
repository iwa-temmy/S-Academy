import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { currencySymbol, formatAmount } from "../../../../utils";
import { courseByTutor } from "../util";
const CoursesByTutorSection = () => {
  return (
    <Box sx={{ mt: 3 }}>
      {courseByTutor?.map((course, index) => {
        return (
          <React.Fragment key={index}>
            <CourseItem course={course} />
          </React.Fragment>
        );
      })}
    </Box>
  );
};

const CourseItem = ({ course }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        border: `1px solid ${theme.palette.neutral[95]}`,
        borderRadius: "8px",
        p: 1,
        my: 1.5,
        width: "100%",
      }}
      gap={2}
    >
      <img
        src={course.image}
        alt="course cover"
        className="rounded-[4px] w-[96px] "
      />
      <Box sx={{ width: "100%" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <div className="flex flex-row items-center">
            <img src="/img/smartComply-logo-icon.svg" className="h-[15px]" />
            <Typography
              sx={{
                fontSize: "9.4px",
                fontWeight: 700,
                color: theme.palette.primary[40],
              }}
            >
              Academy
            </Typography>
          </div>
          <Typography
            sx={{
              backgroundColor: theme.palette.neutral[95],
              borderRadius: "2px",
              px: 0.5,
              fontSize: 10,
              fontWeight: 500,
              color: theme.palette.neutral[50],
              textTransform: "capitalize",
            }}
          >
            {course.difficulty} ||{" "}
            {course.certificate ? "Professional certificate" : ""}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", my: 1 }}
        >
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: theme.palette.neutral[20],
            }}
          >
            {course.title}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: theme.palette.success[60],
            }}
          >
            {currencySymbol}{formatAmount(course.price)}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
export default CoursesByTutorSection;
