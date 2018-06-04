import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

class UsersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
    // console.log("pager.currentPage" + pager.currentPage);
  }

  render() {
    if (!this.props.users) {
      return "Loading";
    }

    const users = this.state.pageOfItems.map((user, i) => {
      return (
        <div key={i} className="thing">
          <p>
            Name:{" "}
            <Link to={`/users/${user.id}/edit`}>
              {user.firstName} {user.lastName}
            </Link>
          </p>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <h1>Users</h1>
          <div className="nav">
            <Link to="/users/new">Add User</Link>
            <br />
          </div>
          <div className="text-center">
            <div>{users}</div>
            <Pagination
              items={this.props.users}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UsersComponent;
