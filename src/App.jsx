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
  { id: 5, name: 'Alice', age: 22, country: 'Australia' },
  { id: 6, name: 'Bob', age: 30, country: 'Germany' },
  { id: 7, name: 'Charlie', age: 35, country: 'France' },
  { id: 8, name: 'Diana', age: 29, country: 'USA' },
  { id: 9, name: 'Eve', age: 45, country: 'India' },
  { id: 10, name: 'Frank', age: 38, country: 'Italy' },
  { id: 11, name: 'Grace', age: 27, country: 'South Africa' },
  { id: 12, name: 'Hannah', age: 32, country: 'New Zealand' },
  { id: 13, name: 'Igor', age: 41, country: 'Russia' },
  { id: 14, name: 'Jack', age: 33, country: 'Japan' },
  { id: 15, name: 'Katherine', age: 29, country: 'Spain' },
  { id: 16, name: 'Liam', age: 36, country: 'Ireland' },
  { id: 17, name: 'Mia', age: 23, country: 'Canada' },
  { id: 18, name: 'Nathan', age: 31, country: 'Brazil' },
  { id: 19, name: 'Olivia', age: 26, country: 'South Korea' },
  { id: 20, name: 'Peter', age: 42, country: 'Mexico' },
  { id: 21, name: 'Quinn', age: 34, country: 'USA' },
  { id: 22, name: 'Rachel', age: 30, country: 'Australia' },
  { id: 23, name: 'Sam', age: 24, country: 'Canada' },
  { id: 24, name: 'Tina', age: 38, country: 'UK' },
  { id: 25, name: 'Uma', age: 41, country: 'India' }
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
