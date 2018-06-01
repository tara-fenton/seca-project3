import React, { Component } from 'react';

class UserComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.users}
      </div>
    );
  }
}

export default UserComponent;
