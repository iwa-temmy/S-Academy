import { TableBody } from '@mui/material';
// core components
import AppTableRow from './AppTableRow';
import EmptyTable from './EmptyTable';
import LoadingTable from './LoadingTable';

const AppTableBody = (props) => {
    const { columns, data, sorter, emptyStateText, loading, rowSpacing, clickableRow, onRowClick } = props;
    const sortedData = sorter ? data?.sort(sorter) : data;
    return (
        <TableBody>
            {!loading ? (
                sortedData?.length ? (
                    sortedData?.map((row, index) => {
                        return clickableRow ? (
                            <AppTableRow
                                columns={columns}
                                row={row}
                                key={index}
                                rowSpacing={rowSpacing}
                                clickableRow={() => clickableRow(row)}
                                onRowClick={() => onRowClick(row)}
                            />
                        ) : (
                            <AppTableRow columns={columns} row={row} key={row?.id || index} rowSpacing={rowSpacing} />
                        );
                    })
                ) : (
                    <EmptyTable description={emptyStateText} />
                )
            ) : (
                <LoadingTable />
            )}
        </TableBody>
    );
};

export default AppTableBody;
