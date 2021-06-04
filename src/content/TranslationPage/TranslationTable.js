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
import translations from '../translations';

const TranslationTable = ({rows, headers, rowIndex}) => {
    return (
        <DataTable
            isSortable
            headers={headers}
            rows={rows}
            render={({
                         rows,
                         headers,
                         getHeaderProps,
                         getRowProps,
                         getTableProps,
                     }) => (
                <TableContainer
                    title='Tunisian - German translations'
                    description='A collection of words I have learnt.'>
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
                            {rows.map((row, index) => (
                                <React.Fragment key={row.id}>
                                    <TableExpandRow {...getRowProps({row})} >
                                        {row.cells.map(cell => (
                                            <TableCell key={cell.value}>{cell.value}</TableCell>
                                        ))}
                                    </TableExpandRow>
                                    <TableExpandedRow colSpan={headers.length + 1}>
                                        {translations[rowIndex+index].info ? translations[rowIndex+index].info : null}
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