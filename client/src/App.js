import React from 'react';
import axios from 'axios';
import { useStyles } from './hooks/useStyles';
import './App.css';

class App extends React.Component {


  state = {
    players: []
  };

  componentDidMount() {
    axios
        // .get(`https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/data.js`)
        .get('https://api.github.com/users/eddiemadrigal/followers')
        .then(res => {
          this.setState({
            players: res.data
          });
          console.log(this.state.players)
        })
        .catch(err => console.log(err));
  }

  

  render() {
    return (
      <div className="App">
        <div>
          
              <h2 className={ useStyles.fontStyling }>Players</h2>
              
                {this.state.players.map( player => (

                  <div key={ player.id }>
                    <ul>
                      <li>Player: { player.login }</li>
                    </ul>
                  </div>

                ))}

        </div>
      </div>
    );
  }
}

export default App;