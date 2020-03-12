import React from 'react';
import Table from './table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], keys: [] };
  }

  componentDidMount() {
    const fetchUrl = 'http://dummy.restapiexample.com/api/v1/employees';
    // Call REST API to get employees
    fetch(fetchUrl)
      // If bad response from url
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        // Ensure API fetch successful
        if (data.status !== 'success') throw Error('Failed API Fetch');
        else {
          // Get object keys for header of table
          const keys = Object.keys(data.data[0]);
          this.setState({
            employees: data.data,
            keys: keys,
          });
        }
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    // Generate table
    return (
      <div className="center">
        <Table employees={this.state.employees} keys={this.state.keys} />
      </div>
    );
  }
}

export default App;
