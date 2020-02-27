import React from 'react';
import './App.css';
import RegisterUser from './components/RegisterUser';
import NextCounter from './components/NextCounter'
import axios from 'axios'

class App extends React.Component {
  state = {
    token: '',
    message: ''
  }

  getToken = (user) => {
    console.log(user);
    axios.post('http://localhost:8080/auth/register', user)
        .then(result => {
            console.log(result.data.token)
            this.setState({
                token : result.data.token,
                message : 'token saved'
            })

        })
        .catch(error=> {
            console.log(error)
            this.setState({
                message : error.message
            })
        })

  }

  render() {
    return (
      <div className="App">
        <h1>UI to help test The Counter API</h1>
        
        <RegisterUser getToken={this.getToken} />
        <p>{this.state.message}</p>
        <hr/>
        <NextCounter token={this.state.token} />
      </div>
    );
  }
}

export default App;
