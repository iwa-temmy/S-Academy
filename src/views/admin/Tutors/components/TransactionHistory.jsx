import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { transactionHistory } from "../util";
import {
  currencySymbol,
  formatDateObjectHandler,
} from "../../../../utils";
const TransactionHistory = () => {
  return (
    <Box sx={{ mt: 3 }}>
      {transactionHistory?.map((transaction, index) => {
        return (
          <React.Fragment key={index}>
            <TransactionItem transaction={transaction} />
          </React.Fragment>
        );
      })}
    </Box>
  );
};

const TransactionItem = ({ transaction }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        border: `1px solid ${theme.palette.neutral[95]}`,
        px: 3,
        my: 1.5,
        py: 0.5,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.1px",
            color: theme.palette.neutral[40],
            textTransform: "capitalize",
          }}
        >
          {transaction.title}
        </Typography>
        <Typography
          sx={{
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: "0.1px",
            color: theme.palette.neutral[50],
            textTransform: "capitalize",
          }}
        >
          {transaction.description}
        </Typography>
      </Box>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 400,
            color: theme.palette.neutral[50],
          }}
        >
          On{" "}
          {formatDateObjectHandler(transaction?.date_created, "Do MMMM, YYYY")}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: transaction.isReceived
              ? theme.palette.success[60]
              : theme.palette.error[60],
          }}
        >
          {!transaction.isReceived && "-"}{currencySymbol}
          {transaction.amount}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default TransactionHistory;
