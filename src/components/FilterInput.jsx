import React from 'react';

const FilterInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Filter..."
            style={{ marginTop: '5px', padding: '5px' }}
        />
    );
};

export default FilterInput;
