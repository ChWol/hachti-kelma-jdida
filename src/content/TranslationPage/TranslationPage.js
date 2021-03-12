import React, { useState } from 'react';
import TranslationTable from "./TranslationTable";
import { Search, SearchFilterButton, TextInput, DataTableSkeleton, Pagination } from 'carbon-components-react';
import trans from "./translations";

const loading = false;

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
    const [totalItems, setTotalItems] = useState(trans.length);
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(10);

    const [search, setSearch] = useState("");
    const [renderRows, setRows] = useState(trans);

    function searcher (word) {
        setSearch(word);
        if(word === "") {
            setRows(trans);
        }
        else {
            const newRows = trans.slice().filter(element => element.german.toLowerCase().includes(word.toLowerCase()));
            setRows(newRows);
        }
    }

    if (loading)
        return (
            <DataTableSkeleton
                columnCount={headers.length}
                rowCount={10}
                headers={headers}
            />
        );

    return (
        <>
            <br/>
            <br/>
            <div>
                <div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <Search
                                id="search-1"
                                onChange={(event) => searcher(event.target.value)}
                            />
                            <SearchFilterButton />
                        </div>
                        <TextInput
                            helperText="Optional helper text"
                            id="test2"
                            value={search}
                            invalidText="A valid value is required"
                            labelText="Text input label"
                            placeholder="Placeholder text"
                        />
                        <TranslationTable
                            headers={headers}
                            translations={renderRows.slice(
                                firstRowIndex,
                                firstRowIndex + currentPageSize
                            )}
                        />
                        <Pagination
                            totalItems={totalItems}
                            backwardText="Previous page"
                            forwardText="Next page"
                            pageSize={currentPageSize}
                            pageSizes={[5, 10, 15, 25]}
                            itemsPerPageText="Items per page"
                            onChange={({ page, pageSize }) => {
                                if (pageSize !== currentPageSize) {
                                    setCurrentPageSize(pageSize);
                                }
                                setFirstRowIndex(pageSize * (page - 1));
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TranslationPage;