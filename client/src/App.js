import React from 'react';
import axios from 'axios';
import Hooks from './Hooks';
import Footer from './Footer';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
        // .get(`https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/data.js`)
        .get('https://api.github.com/users/eddiemadrigal/followers')
        .then(res => {
          this.setState({
            players: res.data
          });
          console.log("Followers: ", this.state.players)
        })
        .catch(err => console.log(err));
  }

  

  render() {
    return (
      <div className="App">
        <div>
          <Hooks />
              
                {this.state.players.map( player => (

                  <div key={ player.id }>
                    <ul>
                      <li >Player: { player.login }</li>
                    </ul>
                  </div>

                ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;