
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
  };

  render() {
    return (
      <div>
        <h2>Registration Form</h2>

        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            onChange={(e) =>
              this.setState({ name: e.target.value })
            }
          />
          <br /><br />

          Email:
          <input
            type="email"
            onChange={(e) =>
              this.setState({ email: e.target.value })
            }
          />
          <br /><br />

          Password:
          <input
            type="password"
            onChange={(e) =>
              this.setState({ password: e.target.value })
            }
          />
          <br /><br />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
