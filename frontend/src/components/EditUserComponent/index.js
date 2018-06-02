import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class EditUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userLoaded: false,

      editedUserData: {
        id: 0,
        firstName: "",
        lastName: "test",
        email: "test",
        gender: "test"
      },
      edited: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchUserById();
  }
  fetchUserById() {
    const { id } = this.props.match.params;
    this.setState(prevState => ({
      editedUserData: {
        ...prevState.editedUserData,
        id: Number(id)
      }
    }));

    fetch(`http://localhost:8080/api/users/${id}`)
      .then(response => response.json())
      .then(userData => {
        console.log(userData);
        this.setState({
          user: userData,
          userLoaded: true
        });
      });
  }
  onInputChange(fieldName, value) {
    this.setState((prevState, props) => {
      const editedUserData = Object.assign({}, prevState.editedUserData);
      editedUserData[fieldName] = value;
      return {
        editedUserData: editedUserData
      };
    });
  }
  onSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.editedUserData);

    fetch(`http://localhost:8080/api/users/`, {
      // fetch(`http://localhost:8080/api/users/${this.state.editedUserData.id}`, {
      // method: "PATCH",
      method: "POST",
      body: JSON.stringify(this.state.editedUserData),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  render() {
    const { edited } = this.state;
    if (edited) {
      return <Redirect to="/" />;
    }
    return (
      <div id="parent">
        <div>Edit User</div>
        {this.state.userLoaded ? (
          <div>
            <form onSubmit={this.onSubmit}>
              <label>
                First Name{" "}
                <input
                  type="text"
                  onChange={evt =>
                    this.onInputChange("firstName", evt.target.value)
                  }
                  value={this.state.editedUserData.firstName}
                />
              </label>
              <button type="submit" value="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

export default EditUserComponent;
