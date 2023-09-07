import React from 'react';
import { useTheme } from '@mui/material/styles';
import { TableHead, TableRow, Tooltip } from '@mui/material';
import { InfoRounded } from '@mui/icons-material';

// core components
import AppTableCell from './AppTableCell';

const TableHeader = (props) => {
    const theme = useTheme();
    const { columns } = props;
    return (
        <TableHead sx={{ backgroundColor: theme.palette.shades.white, maxHeight: 40 }}>
            <TableRow>
                {columns
                    ? columns.map((column, idx) => {
                          return (
                              <AppTableCell
                                  align={column.align}
                                  sx={{
                                      fontWeight: 700,
                                      color: theme.palette.neutral[50],
                                      fontSize: 14,
                                      textTransform: 'uppercase',
                                      borderBottom: `0.3px solid ${theme.palette.neutral[70]}2f`,
                                  }}
                                  key={column.title + 'Head' + idx}
                              >
                                  {column.title}
                                  {column?.tooltip && (
                                      <Tooltip
                                          placement="top-end"
                                          arrow
                                          title={column.tooltip}
                                          PopperProps={{
                                              sx: {
                                                  '& .MuiTooltip-tooltip, & .MuiTooltip-arrow::before': {
                                                      backgroundColor: theme.palette.neutral[20],
                                                  },
                                                  '& .MuiTooltip-tooltip': {
                                                      p: 2.5,
                                                      fontSize: 10,
                                                      fontWeight: 500,
                                                  },
                                              },
                                          }}
                                      >
                                          <InfoRounded
                                              sx={{ fontSize: 14, color: theme.palette.neutral[60], ml: 0.5, pb: 0.1 }}
                                          />
                                      </Tooltip>
                                  )}
                              </AppTableCell>
                          );
                      })
                    : null}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
