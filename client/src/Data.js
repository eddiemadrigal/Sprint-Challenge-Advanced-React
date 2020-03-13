import React from 'react';
import axios from 'axios';

export default class Data extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/data.js`)
      .then(res => {
        let persons = res.data;
        persons = JSON.stringify(persons);
        persons = JSON.parse(persons);
        this.setState({ persons });
        
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}