import React, {useState} from 'react';
import TranslationTable from './TranslationTable';
import {
    Search, 
    DataTableSkeleton, 
    Pagination
} from 'carbon-components-react';
import translations from './translations';

// Only important for IBM project, soon to be removed
const loading = false;

// Table headers
const headers = [
    {
        key: 'tunisian',
        header: 'Tunisian',
    },
    {
        key: 'german',
        header: 'German',
    },
];

const TranslationPage = () => {
    // State variables for pagination: Number of rows, current pagination-position, size of page, rows of page
    const [totalItems, setTotalItems] = useState(translations.length);
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(10);
    const [selectedRows, setSelectedRows] = useState(translations);

    // Only important for IBM project, soon to be removed
    if (loading)
        return (
            <DataTableSkeleton
                columnCount={headers.length}
                rowCount={10}
                headers={headers}
            />
        );

    // Search table for rows containing a word
    function searchWord(word) {
        if (!word) {
            setSelectedRows(translations);
            setTotalItems(translations.length)
        } else {
            // Filtering for german as well as tunisian words
            const filteredRows = translations.slice()
                .filter(element => element.german.toLowerCase().includes(word.toLowerCase()) ||
                    element.tunisian.toLowerCase().includes(word.toLowerCase()));
            setSelectedRows(filteredRows);
            setTotalItems(filteredRows.length)
        }
    }

    return (
        <div style={{paddingTop: '50px'}}>
            <Search
                id='search'
                onChange={(event) => searchWord(event.target.value)}
            />
            <TranslationTable
                headers={headers}
                rows={selectedRows.slice(
                    firstRowIndex,
                    firstRowIndex + currentPageSize
                )}
            />
            <Pagination
                totalItems={totalItems}
                backwardText='Previous page'
                forwardText='Next page'
                pageSize={currentPageSize}
                pageSizes={[5, 10, 15, 25]}
                itemsPerPageText='Items per page'
                onChange={({page, pageSize}) => {
                    if (pageSize !== currentPageSize) {
                        setCurrentPageSize(pageSize);
                    }
                    setFirstRowIndex(pageSize * (page - 1));
                }}
            />
        </div>
    );
};

export default TranslationPage;