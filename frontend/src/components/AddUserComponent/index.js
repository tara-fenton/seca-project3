import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AddUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: null,
      // userLoaded: false,

      user: {
        firstName: "",
        lastName: "test",
        email: "test",
        gender: "test"
      },
      created: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    //this.fetchUserById();
  }
  // fetchUserById() {
  //   const { id } = this.props.match.params;
  //   this.setState(prevState => ({
  //     user: {
  //       ...prevState.user,
  //       id: Number(id)
  //     }
  //   }));
  //
  //   fetch(`http://localhost:8080/api/users/${id}`)
  //     .then(response => response.json())
  //     .then(userData => {
  //       console.log(userData);
  //       this.setState({
  //         user: userData,
  //         userLoaded: true
  //       });
  //     });
  // }
  onInputChange(fieldName, value) {
    this.setState((prevState, props) => {
      const user = Object.assign({}, prevState.user);
      user[fieldName] = value;
      return {
        user: user
      };
    });
  }
  onSubmit(evt) {
    evt.preventDefault();
    // console.log(this.state.user);

    fetch(`http://localhost:8080/api/users/`, {
      // fetch(`http://localhost:8080/api/users/${this.state.user.id}`, {
      // method: "PATCH",
      method: "POST",
      body: JSON.stringify(this.state.user),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(
      this.setState({
        created: true
      })
    );
  }
  render() {
    const { created } = this.state;
    if (created) {
      return <Redirect to="/users" />;
    }

    return (
      <div id="parent">
        <div>Add User</div>

        <div>
          <form onSubmit={this.onSubmit}>
            <label>
              First Name{" "}
              <input
                type="text"
                onChange={evt =>
                  this.onInputChange("firstName", evt.target.value)
                }
                value={this.state.user.firstName}
              />
            </label>
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUserComponent;
