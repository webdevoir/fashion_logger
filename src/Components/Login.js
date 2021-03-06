import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class logIn extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: ""
      }
    };
  }

  login = (username, password) => {
    fetch("http://localhost:3000/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(resp => {
        if (resp.error) {
          this.setState({ error: true });
        } else {
          this.props.handleLogin(resp);
          this.props.history.push("/topics");
        }
      });
  };

  handleChange = e => {
    const newFields = {
      ...this.state.fields,
      [e.target.name]: e.target.value
    };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.login(this.state.fields.username, this.state.fields.password);
  };

  render() {
    const { fields } = this.state;
    return (
      <Container id="bg">
        <div
          style={{
            marginTop: "10.00em",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "450px"
          }}
        >
          {this.state.error ? <h1> Try Again </h1> : null}
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <Container size="small">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon" />
                    <input
                      onChange={this.handleChange}
                      value={fields.username}
                      type="text"
                      name="username"
                      placeholder="username"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon" />
                    <input
                      onChange={this.handleChange}
                      value={fields.password}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <Button black="true" fluid>
                  Login
                </Button>
              </div>
            </Container>

            <div className="ui error message" />
          </form>
          <div className="ui message">
            New to us?
            <Link to="/users/new">
              <a centered="true"> Sign Up </a>
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}
export default logIn;
