import React, { Component } from "react";

class EditUserComponent extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      //currentUser: null
    };

    // this.addDebit = this.addDebit.bind(this);
  }
  componentDidMount() {
    this.fetchUserById();
  }
  fetchUserById() {
    const { slug } = this.props.match.params.id;
    console.log("slug "+this.props.match.params);
    fetch(`http://localhost:8080/api/users/${slug}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
           user: userData,
        });
      });
  }
  render() {
    // const users = this.props.users.map((user, i) => {
    //   return (
    //     <div key={i} className="thing">
    //       <p>First Name: {user.firstName}</p>
    //       <p>Last Name: ${user.lastName}</p>
    //       <p>Email: {user.email}</p>
    //       <p>Gender: {user.gender}</p>
    //     </div>
    //   );
    // });

    return (
      <div id="parent">
        <div>Edit User</div>
        {/* <div>{user.firstName}</div> */}
      </div>
    )
  }
}

export default EditUserComponent;
