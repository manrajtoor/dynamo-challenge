import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ employees, keys }) => {
  function renderRows() {
    // Generate rows for each employee
    return employees.map((item) => {
      const { id, employeeName, employeeSalary, employeeAge, profileImage } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{employeeName}</td>
          <td>{employeeSalary}</td>
          <td>{employeeAge}</td>
          <td><img src={profileImage} alt={employeeName + "'s image"} /></td>
        </tr>
      );
    },
    );
  }

  const headers = keys.map((key) => {
    return <th>{key.toUpperCase()}</th>;
  });

  return (
    <table>
      <tbody>
        <tr>{headers}</tr>
        {renderRows()}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  keys: PropTypes.array.isRequired,
  employees: PropTypes.array.isRequired,

};

export default Table;
