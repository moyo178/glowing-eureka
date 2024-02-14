import React, { Component } from 'react';

class YourComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) 
      .then(data => {
        this.setState({
          items: data, // TO Update the items array with the fetched data
          isLoaded: true // Set isLoaded to true to indicate that data fetching is complete
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ isLoaded: true }); // Update isLoaded even if there's an error
      });
  }

  render() {
    const { items, isLoaded } = this.state;
    
    if (!isLoaded) {
      return <div>Data Is Loading...</div>;
    } else {
      return (
        <div>
          <h1>User List And information</h1>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}{item.city}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default YourComponent;
