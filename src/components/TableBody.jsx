import React from 'react';

const TableBody = ({ data, columnsConfig }) => {
    return (
        <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {columnsConfig.map(({ dataKey }) => (
                        <td key={dataKey}>{row[dataKey]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
