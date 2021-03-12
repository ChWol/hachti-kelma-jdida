import React, { useState } from 'react';
import TranslationTable from "./TranslationTable";
import { Search, SearchFilterButton, TextInput, DataTableSkeleton, Pagination } from 'carbon-components-react';
const loading = false;

const headers = [
    {
        key: 'name',
        header: 'Name',
    },
    {
        key: 'createdAt',
        header: 'Created',
    },
    {
        key: 'updatedAt',
        header: 'Updated',
    },
    {
        key: 'issueCount',
        header: 'Open Issues',
    },
    {
        key: 'stars',
        header: 'Stars',
    },
    {
        key: 'links',
        header: 'Links',
    },
];

const rows = [
    {
        id: '1',
        name: 'Repo 1',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '2',
        name: 'Repo 2',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '3',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '4',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '5',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '6',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '7',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '8',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '9',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '10',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '11',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '12',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '13',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '14',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    }
];

const TranslationPage = () => {
    const [totalItems, setTotalItems] = useState(14);
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(10);
    const [mine, showMine] = useState(false);
    const [search, setSearch] = useState("");
    const [renderRows, setRows] = useState(rows);

    function searcher (word) {
        setSearch(word);
        if(word === "") {
            setRows(rows);
        }
        else {
            const newRows = rows.slice().filter(element => element.name.includes(word));
            setRows(newRows);
        }
    }

    if (loading)
        return (
            <DataTableSkeleton
                columnCount={headers.length + 1}
                rowCount={10}
                headers={headers}
            />
        );

    return (
        <>
            <br/>
            <br/>
            <button onClick={() => showMine(!mine)}>Only show mine</button>
            <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
                <div className="bx--row repo-page__r1">
                    <div className="bx--col-lg-16">
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
                            rows={mine ? renderRows.slice(0, 3) : renderRows.slice(
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