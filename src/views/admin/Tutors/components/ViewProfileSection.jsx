import { Stack } from "@mui/material";
import ProfileInfoItem from "./ProfileInfoItem";
import { useTheme } from "@mui/styles";

const ViewProfileSection = ({ data }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          mt: 3,
          border: `1px solid ${theme.palette.neutral[95]}`,
          px: 3,
          py: 0.5,
        }}
      >
        <ProfileInfoItem name="full name" value={data?.name} />
        <ProfileInfoItem name="email" value={data?.email} />
      </Stack>
      <Stack
        direction="row"
        gap={10}
        sx={{
          my: 1,
          border: `1px solid ${theme.palette.neutral[95]}`,
          px: 3,
          py: 0.5,
        }}
      >
        <ProfileInfoItem name="number of courses" value={data?.courses} />
        <ProfileInfoItem
          name="total times courses sold"
          value={data?.course_sold}
        />
        <ProfileInfoItem name="total course earning" value={data?.earning} />
      </Stack>
    </>
  );
};

export default ViewProfileSection;
