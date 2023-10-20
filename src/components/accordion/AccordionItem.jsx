import { Box, Stack } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useTheme } from "@mui/styles";

const AccordionItem = (props) => {
  const { isActive, onChange, title, content } = props;

  //theme
  const theme = useTheme();
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ borderBottom: `1px solid ${theme.palette.gray[95]}`, py: 1 }}
      >
        <Box>{title}</Box>
        <Stack direction="row">
          <div className="cursor-pointer" onClick={onChange}>
            {isActive ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </div>
        </Stack>
      </Stack>
      {isActive && <Box sx={{ my: 2 }}>{content}</Box>}
    </Box>
  );
};

export default AccordionItem;
