import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = { employees: [] };
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount() {
    const fetch_url = "http://dummy.restapiexample.com/api/v1/employees";
    // Call REST API to get employees
    fetch(fetch_url)
    // If bad response from url
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        if (data.status != 'success') throw Error('Failed API Fetch');
        else {
          this.setState({
            employees: data.data,
          });
        }
      })
      .catch((error) => { console.log(error); });
  }

  renderRows() {
    return this.state.employees.map((item, key) => {
      const {id, employee_name, employee_salary, employee_age, profile_image} = item;
      console.log(item)
      console.log(name)

      return (
        <tr key={id}>  
          <td>{id}</td>
          <td>{employee_name}</td>
          <td>{employee_salary}</td>
          <td>{employee_age}</td>
          <td>{profile_image}</td>
        </tr>
      )
    }
    );
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <p>Hello World!</p>
      </div>
    );
  }
}

export default Table;
