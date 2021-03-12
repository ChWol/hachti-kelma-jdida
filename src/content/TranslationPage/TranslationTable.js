import React from 'react';
import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableExpandHeader,
    TableHeader,
    TableBody,
    TableExpandRow,
    TableCell,
    TableExpandedRow,
} from 'carbon-components-react';

const TranslationTable = ({translations, headers}) => {
    return (
        <DataTable
            isSortable
            headers={headers}
            rows={translations}
            render={({
                         rows,
                         headers,
                         getHeaderProps,
                         getRowProps,
                         getTableProps,
                     }) => (
                <TableContainer
                    title="Carbon Repositories"
                    description="A collection of public Carbon repositories.">
                    {console.log(headers)}
                    {console.log(rows)}
                    <Table {...getTableProps()} >
                        <TableHead>
                            <TableRow>
                                <TableExpandHeader/>
                                {headers.map(header => (
                                    <TableHeader {...getHeaderProps({header})}>
                                        {header.header}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <React.Fragment key={row.id}>
                                    <TableExpandRow {...getRowProps({row})} >
                                        {row.cells.map(cell => (
                                            <TableCell key={cell.tunisian}>{cell.value}</TableCell>
                                        ))}
                                    </TableExpandRow>
                                    <TableExpandedRow colSpan={headers.length + 1}>
                                        <p>Hier können weitere informative Details stehen</p>
                                    </TableExpandedRow>
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        />
    );
};

export default TranslationTable;