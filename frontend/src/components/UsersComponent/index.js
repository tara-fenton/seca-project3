import React, { Component } from "react";

class UsersComponent extends Component {
  render() {
    const users = this.props.users.map((user, i) => {
      return (
        <div key={i} className="thing">
          <p>First Name: {user.firstName}</p>
          <p>Last Name: ${user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
        </div>
      );
    });

    return <div>{users}</div>;
  }
}

export default UsersComponent;
