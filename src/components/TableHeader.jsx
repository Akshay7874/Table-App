import React from 'react';
import FilterInput from './FilterInput';

const TableHeader = ({ columnsConfig, onSort, onFilterChange, filters }) => {
    return (
        <thead>
            <tr>
                {columnsConfig.map(({ title, dataKey, sortable, filterable }) => (
                    <th key={dataKey}>
                        {sortable && (
                            <button onClick={() => onSort(dataKey)}>
                                {title}
                                {filters[dataKey] ? ' 🔍' : ''}
                            </button>
                        )}
                        {filterable && (
                            <FilterInput
                                value={filters[dataKey] || ''}
                                onChange={(e) => onFilterChange(dataKey, e.target.value)}
                            />
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
