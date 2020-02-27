import React from 'react'
import './App.css'
import RegisterUser from './components/RegisterUser'
import NextCounter from './components/NextCounter'
import CurrentCounter from './components/CurrentCounter'
import ResetCounter from './components/ResetCounter'
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
                message : 'token retrieved successfully'
            })

        })
        .catch(error=> {
            console.log(error)
            this.setState({
                message : error.message
            })
        })

  }

  resetCounter = (current) => {
    console.log(current);
    console.log(this.state.token)
    axios.put('http://localhost:8080/api/current', {current}, {
        headers: {
          'Authorization': `Bearer ${this.state.token}`
        }})
        .then(result => {
            console.log(result.data.data.id)
            this.setState({
                messageReset : `Counter Reset to ${result.data.data.id}`
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
        <hr/>
        <CurrentCounter token={this.state.token} />
        <hr/>
        <ResetCounter token={this.state.token} resetCounter={this.resetCounter}/>
        <p>{this.state.messageReset}</p>
      </div>
    );
  }
}

export default App;
