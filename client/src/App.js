import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users: []
  };

  componentDidMount() {
    axios
    .get('https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/data.js')
    .then( res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>Test</div>
    )
  }


}

export default App;