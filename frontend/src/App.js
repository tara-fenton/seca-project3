import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "./App.css";
import UsersComponent from "./components/UsersComponent";
import EditUserComponent from "./components/EditUserComponent";
import AddUserComponent from "./components/AddUserComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: null
    };

    // this.addDebit = this.addDebit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(users => {
        this.setState({ users: users.content });
      })
      .catch(err => console.log(err));
  }
  render() {
    const Users = () => <UsersComponent users={this.state.users} />;
    const EditUser = props => <EditUserComponent {...props} user={this.state.currentUser} />;
    const AddUser = props => <AddUserComponent />;

    // render = {props => <PageStart {...props} key={this.props.location.key} /> } /
    // const EditUser = () => <EditUserComponent  />;
    return (
      <Router>
       <Switch>
         {/* <Route exact path="/" render={HomeComponent} /> */}
         <Route exact path="/users" render={Users} />
         <Route path="/users/:id/edit" render={EditUser} />
         <Route path="/users/new" render={AddUser} />
      </Switch>
    </Router>
    );
  }
}

export default App;
