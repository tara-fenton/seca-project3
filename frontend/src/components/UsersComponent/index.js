import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

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
        <tr key={i}>
          <td>{user.id}</td>
          <td>
            <Link to={`/users/${user.id}/edit`}>
              {user.firstName} {user.lastName}
            </Link>
          </td>
          <td>
            {/* /api/users/{userId} DELETE */}
          <a class="btn btn-primary" href={`/users/${user.id}/edit`} role="button">Delete</a>
        </td>
        </tr>
      );
    });

    return (
      <div>
        <div className="main">
          <h1>Users</h1>

          <div className="text-center">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users}
              </tbody>
            </Table>
            <div className="nav">
              <Link to="/users/new">Add User</Link>
            </div>
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
