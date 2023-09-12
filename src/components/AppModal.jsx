import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTheme } from "@mui/styles";
const AppModal = (props) => {
  const { open, handleClose, title, hasCloseBtn, children } = props;

  const theme = useTheme();
  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: "32px" }}
      >
        <DialogTitle
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            mb: 0,
            color: theme.palette.neutral[30],
            px: 0,
          }}
        >
          {title}
        </DialogTitle>
        {hasCloseBtn && (
          <IconButton
            sx={{ py: 1, color: theme.palette.neutral[60] }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        )}
      </Stack>
      <DialogContent sx={{ px: "32px" }}>{children}</DialogContent>
    </Dialog>
  );
};

export default AppModal;
