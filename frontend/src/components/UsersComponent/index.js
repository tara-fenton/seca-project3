import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

class UsersComponent extends Component {
  constructor(props) {
    super();

    // an example array of 150 items to be paged
    var exampleItems = [...Array(150).keys()].map(i => ({
      id: i + 1,
      name: "Item " + (i + 1)
    }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
    this.click = this.click.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  click() {
    console.log("i was clicked");
  }
  render() {
    const pagination = this.state.pageOfItems.map(item => {
      return <div key={item.id}>{item.name}</div>;
    });
    const users = this.props.users.map((user, i) => {
      return (
        <div key={i} className="thing">
          {/* onClick={this.click} */}
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
        <div>{users}</div>
        <div className="container">
          <div className="text-center">
            <div>{pagination}</div>
            <Pagination
              items={this.state.exampleItems}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UsersComponent;
