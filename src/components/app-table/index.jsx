import { TableContainer, Table, Stack, useTheme } from "@mui/material";

// core components
import TableTopbar from "./TableTopbar";
import TableHeader from "./TableHeader";
import AppTableBody from "./AppTableBody";
import AppTablePagination from "./AppTablePagination";
import AppCard from "../cards/AppCard";
import AppTabsBar from "../tabs/AppTabsBar";
import AppTab from "../tabs/AppTab";

const AppTable = (props) => {
  const theme = useTheme();
  const {
    columns,
    data,
    title,
    actions,
    sorter,
    page,
    onPageChange,
    emptyStateText,
    noPerPage,
    dataLength,
    loading,
    showTitleBar = true,
    sx = {},
    rowSpacing,
    onRowClick,
    clickableRow,
    onSearch,
    filterActions,
    hasSearch,
    showTabs = false,
    tabs,
    onTabChange,
    tab,
    hasEmptyComponent,
    emptyComponent,
  } = props;
  return (
    <AppCard
      sx={{
        px: 4,
        py: 2.5,
        borderRadius: 1,
        flex: data?.length ? 0.5 : "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...sx?.container,
      }}
    >
      {showTabs && (
        <AppTabsBar
          value={tab}
          onChange={onTabChange}
          sx={{
            flex: 0.5,
            mb: 0.5,

            "& .MuiTabs-indicator": {
              bottom: "10px",
            },
          }}
        >
          {tabs?.map((tab) => {
            return (
              <AppTab
                label={tab.name}
                id={tab.id}
                key={tab.id}
                sx={{ fontSize: 13, mx: 0, mr: 2 }}
              />
            );
          })}
        </AppTabsBar>
      )}

      <Stack sx={{ flex: 1 }}>
        {!data?.length && hasEmptyComponent ? (
          emptyComponent
        ) : (
          <>
            {showTitleBar && (
              <TableTopbar
                title={title}
                actions={actions}
                hasSearch={hasSearch}
                onSearch={onSearch}
                filterActions={filterActions}
              />
            )}
            <TableContainer
              sx={{
                border: `0.3px solid ${theme.palette.neutral[70]}2f`,
                borderRadius: 1,
              }}
              component={Stack}
            >
              <Table sx={{}}>
                <TableHeader columns={columns} />
                <AppTableBody
                  columns={columns}
                  data={data}
                  sorter={sorter}
                  emptyStateText={emptyStateText}
                  loading={loading}
                  rowSpacing={rowSpacing}
                  clickableRow={clickableRow}
                  onRowClick={onRowClick}
                />
              </Table>
            </TableContainer>
          </>
        )}
      </Stack>
      {Boolean(dataLength) && (
        <AppTablePagination
          page={page}
          onPageChange={onPageChange}
          noPerPage={noPerPage}
          dataLength={dataLength}
        />
      )}
    </AppCard>
  );
};

export default AppTable;
