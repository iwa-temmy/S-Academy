import { Box, Typography } from "@mui/material";
import AppDrawer from "../../../components/AppDrawer";
import AppOpaqueTag from "../../../components/AppOpaqueTag";
import { useTheme } from "@mui/styles";
import ViewProfileSection from "./components/ViewProfileSection";
import CoursesByTutorSection from "./components/CoursesByTutorSection";
import TransactionHistory from "./components/TransactionHistory";

const ViewDetailsDrawer = (props) => {
  const { open, handleClose, payload } = props;

  return (
    <AppDrawer
      title="More Tutor details"
      open={open}
      handleClose={handleClose}
      action={
        <AppOpaqueTag
          label={payload?.status}
          type={payload?.status === "active" ? "success" : "error"}
        />
      }
    >
      <SectionContainer title="Tutor profile">
        <ViewProfileSection data={payload} />
      </SectionContainer>
      <SectionContainer title="Courses BY this tutor">
        <CoursesByTutorSection />
      </SectionContainer>
      <SectionContainer title="Transaction history">
        <TransactionHistory />
      </SectionContainer>
    </AppDrawer>
  );
};

const SectionContainer = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        m: 3,
        border: `1px solid ${theme.palette.neutral[95]}`,
        borderRadius: "4px",
      }}
    >
      <Box sx={{ m: 2 }}>
        <Typography
          sx={{
            borderBottom: `1px solid ${theme.palette.neutral[95]}`,
            py: 1,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1px",
            color: theme.palette.neutral[30],
          }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};
export default ViewDetailsDrawer;
