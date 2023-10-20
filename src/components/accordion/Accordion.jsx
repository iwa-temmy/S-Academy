import { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const theme = useTheme();
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.gray[90]}`,
        width: "100%",
        px: 3,
        py: 1,
        borderRadius: "8px",
      }}
    >
      <AccordionItem isActive={isActive} onChange={() => setIsActive(true)} />
    </Box>
  );
};

export default Accordion;
