import React from 'react';

class Table extends React.Component {
  // constructor() {

  // }

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
        console.log(data);
      })
      .catch((error) => { console.log(error); });
  }
  render() {
    return (
      <div>
      <p>Hello World!</p>
      </div>
    );
  }
}

export default Table;
