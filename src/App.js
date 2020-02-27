import React from "react";
import "./App.css";
import RegisterUser from "./components/RegisterUser";
import axios from 'axios'

class App extends React.Component {
  state = {
    token: ""
  }

  getToken = (user) => {
    console.log(user);

  }

  render() {
    return (
      <div className="App">
        <h1>UI to help test The Counter API</h1>
        <RegisterUser getToken={this.getToken} />
      </div>
    );
  }
}

export default App;
