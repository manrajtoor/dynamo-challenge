import React from 'react';

const Table = ({ employees, keys }) => {

    function renderRows() {
      // Generate rows for each employee
      return employees.map((item) => {
        const { id, employee_name, employee_salary, employee_age, profile_image } = item;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{employee_name}</td>
            <td>{employee_salary}</td>
            <td>{employee_age}</td>
            <td><img src={profile_image} alt={employee_name + "'s image"}/></td>
          </tr>
        );
      },
      );
    }

    var headers = keys.map((key) => {
       return <th>{key.toUpperCase()}</th>
    },);

    return (
      <table>
        <tbody>
          <tr>{headers}</tr>
          {renderRows()}
        </tbody>
      </table>
    );

}

export default Table;