import React, { useState } from 'react';
import TranslationTable from "./TranslationTable";
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
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
];

const TranslationPage = () => {
    const [totalItems, setTotalItems] = useState(3);
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(10);

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
            <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
                <div className="bx--row repo-page__r1">
                    <div className="bx--col-lg-16">
                        <TranslationTable
                            headers={headers}
                            rows={rows.slice(
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