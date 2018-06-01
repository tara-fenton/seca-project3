import React, { Component } from "react";
import "./App.css";
import UserComponent from "./components/UserComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: {}
    };

    // this.addDebit = this.addDebit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/users", {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
       }

    })
      .then(res => res.json())
      .then(users => {
        this.setState({ users: users });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <UserComponent />
      </div>
    );
  }
}

export default App;
