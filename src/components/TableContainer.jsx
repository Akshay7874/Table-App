import React, { useState, useMemo } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const TableContainer = ({ data, columnsConfig, dynamicStyles }) => {
    const [sortConfig, setSortConfig] = useState(null);
    const [filters, setFilters] = useState({});

    const handleSort = (columnKey) => {
        const newSortConfig = {
            key: columnKey,
            direction: sortConfig?.direction === 'ascending' ? 'descending' : 'ascending',
        };
        setSortConfig(newSortConfig);
    };

    const handleFilterChange = (columnKey, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [columnKey]: value,
        }));
    };

    const sortedAndFilteredData = useMemo(() => {
        let filteredData = data;

        // Apply filtering
        for (const columnKey in filters) {
            if (filters[columnKey]) {
                filteredData = filteredData.filter((row) =>
                    row[columnKey].toString().toLowerCase().includes(filters[columnKey].toLowerCase())
                );
            }
        }

        // Apply sorting
        if (sortConfig) {
            const { key, direction } = sortConfig;
            filteredData = [...filteredData].sort((a, b) => {
                if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
                if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
                return 0;
            });
        }

        return filteredData;
    }, [data, filters, sortConfig]);

    return (
        <div style={{ fontSize: dynamicStyles.fontSize, backgroundColor: dynamicStyles.bgColor, color: dynamicStyles.fontColor }}>
            <table>
                <TableHeader
                    columnsConfig={columnsConfig}
                    onSort={handleSort}
                    onFilterChange={handleFilterChange}
                    filters={filters}
                />
                <TableBody data={sortedAndFilteredData} columnsConfig={columnsConfig} />
            </table>
        </div>
    );
};

export default TableContainer;
