import { useTheme } from "@mui/material/styles";
import {
  Box,
  CardHeader,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AppInput from "../AppInput";

const TableTopbar = (props) => {
  const { title, actions, onSearch, filterActions, hasSearch } = props;
  const theme = useTheme();

  return (
    <CardHeader
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        p: 0,
        "& .MuiCardHeader-action": {
          alignSelf: "flex-end",
          m: 0,
        },
      }}
      title={
        <Stack>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              mb: 1.5,
              color: theme.palette.neutral[30],
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ gap: 2 }}>
            {hasSearch && (
              <AppInput
                placeholder="Search"
                sx={{
                  maxWidth: 250,
                  borderColor: theme.palette.neutral[70] + "7f",
                  borderRadius: 2,
                  zIndex: "-99px",
                  mt: 0.6,
                  "& input::placeholder": {
                    color: theme.palette.neutral[70],
                    fontWeight: 400,
                    fontSize: 14,
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Box
                      component={Search}
                      sx={{ color: theme.palette.neutral[70] }}
                    />
                  </InputAdornment>
                }
                controlStyle={{
                  mt: -"0.8px",
                  width: "fit-content",
                  "& .floating_container": {
                    mb: 0,
                  },
                }}
                onChange={onSearch}
              />
            )}
            {filterActions}
          </Stack>
        </Stack>
      }
      action={
        <Stack
          direction="row"
          spacing={1}
          alignItems="flex-end"
          sx={{ m: 0, mb: 1.5 }}
        >
          {actions}
        </Stack>
      }
    />
  );
};

export default TableTopbar;
