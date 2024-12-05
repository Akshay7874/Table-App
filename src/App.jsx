import React from 'react';
import TableContainer from './components/TableContainer';
import './styles.css';

const columnsConfig = [
  { title: 'ID', dataKey: 'id', sortable: true, filterable: true },
  { title: 'Name', dataKey: 'name', sortable: true, filterable: true },
  { title: 'Age', dataKey: 'age', sortable: true, filterable: true },
  { title: 'Country', dataKey: 'country', sortable: false, filterable: true },
];

const data = [
  { id: 1, name: 'John', age: 28, country: 'USA' },
  { id: 2, name: 'Jane', age: 34, country: 'Canada' },
  { id: 3, name: 'Doe', age: 25, country: 'USA' },
  { id: 4, name: 'Mary', age: 40, country: 'UK' },
];

const dynamicStyles = {
  fontSize: '14px',
  bgColor: '#f4f4f4',
  fontColor: '#333',
};

const App = () => {
  return (
    <div>
      <h1>Custom Table Component</h1>
      <TableContainer data={data} columnsConfig={columnsConfig} dynamicStyles={dynamicStyles} />
    </div>
  );
};

export default App;
