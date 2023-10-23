import { Grid, Stack, Box } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useTheme } from "@mui/styles";

const AccordionItem = (props) => {
  const { isActive, onChange, title, actions, content } = props;

  //theme
  const theme = useTheme();
  return (
    <Grid item xs={12} md={12} lg={12} sx={{ "&.MuiGrid-item": { pl: 0 } }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ borderBottom: `1px solid ${theme.palette.gray[95]}`, py: 1 }}
      >
        <Box>{title}</Box>
        <Stack direction="row" alignItems="center" gap={2}>
          {actions}
          <div className="cursor-pointer" onClick={onChange}>
            {isActive ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </div>
        </Stack>
      </Stack>
      {isActive && <Box sx={{ my: 2 }}>{content}</Box>}
    </Grid>
  );
};

export default AccordionItem;
