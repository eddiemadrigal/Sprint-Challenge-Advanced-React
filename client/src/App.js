import React from 'react';

import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    searchText: '',
    followers: []
  };

  componentDidMount() {


    axios
        .get(`https://api.github.com/users/eddiemadrigal/followers`)
        .then(res => {
          this.setState({
            followers: res.data
          });
        })
        .catch(err => console.log(err));

  }

  

  render() {
    return (
      <div className="App">
        <div>
          

          
              <h2>Followers</h2>
              
                {this.state.followers.map( follower => (

                  <div className="card-info" key={ follower.id }>
                    <div>
                      <h2>Name: { follower.name }</h2>
                    </div>
                  </div>

                ))}

        </div>
      </div>
    );
  }
}

export default App;