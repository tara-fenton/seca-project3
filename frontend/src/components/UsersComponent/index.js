import React, { Component } from "react";
import { Link } from 'react-router-dom';


class UsersComponent extends Component {
  constructor() {
    super();
    // this.state = {
    //   user: [],
    //   //currentUser: null
    // };

    this.click = this.click.bind(this);
  }
  click() {
    console.log('i was clicked');
  }
  render() {
    const users = this.props.users.map((user, i) => {
      return (
        <div key={i} className="thing">
          {/* onClick={this.click} */}
          <p>Name: <Link to={`/users/${user.id}/edit`}>{user.firstName} {user.lastName}</Link></p>
        </div>
      );
    });

    return <div>{users}</div>;
  }
}

export default UsersComponent;
