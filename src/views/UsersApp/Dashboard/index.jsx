import { Box } from "@mui/material";
import { useState } from "react";
import Dashboard from "./Dashboard";
import EmptyDashboard from "./EmptyDashboard";

const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>{open ? <Dashboard /> : <EmptyDashboard setOpen={setOpen} />}</Box>
  );
};

export default Index;
