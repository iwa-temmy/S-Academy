import { Grid } from "@mui/material";
import { useTheme } from "@mui/styles";

const Accordion = (props) => {
  const { children } = props;

  const theme = useTheme();
  return (
    <Grid
      container
      columnSpacing={4}
      sx={{
        border: `1px solid ${theme.palette.gray[90]}`,
        width: "100%",
        px: 3,
        my: 1,
        mx: 0,
        borderRadius: "8px",
      }}
    >
      {children}
    </Grid>
  );
};

export default Accordion;
