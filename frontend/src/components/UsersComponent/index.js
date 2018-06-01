import React, { Component } from "react";

class UsersComponent extends Component {
  render() {
    const users = this.props.users.map((user, i) => {
      return (
        <div key={i} className="thing">
          <p>Name: <a href={`user/${user.id}`}>{user.firstName} {user.lastName}</a></p>
        </div>
      );
    });

    return <div>{users}</div>;
  }
}

export default UsersComponent;
