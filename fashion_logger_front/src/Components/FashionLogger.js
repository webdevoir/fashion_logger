import React, { Component } from "react";
import User from "./User";

class FashionLogger extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(arr =>
        this.setState({
          user: arr[0]
        })
      );
  }

  render() {
    return (
      <div>
        <h1> Welcome to the Body of Fashion Logger</h1>
        <User info={this.state.user} />
      </div>
    );
  }
}

export default FashionLogger;