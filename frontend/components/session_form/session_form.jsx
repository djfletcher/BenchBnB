import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.formType = (this.props.formType === "signup" ? "Sign Up" : "Log In");
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.formType = (nextProps.formType === "signup" ? "Sign Up" : "Log In");

  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  update (field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  renderErrors() {
    if (this.props.errors.responseJSON) {
      const errors = this.props.errors.responseJSON.map((e, i) => (
        <li key={i}>{e}</li>
      ));
      return <ul>{errors}</ul>;
    }
  }

  navLink() {
    if (this.formType === "Log In") {
      return <Link to="/signup" >Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Please {this.formType} or {this.navLink()} instead</h2>
        {this.renderErrors()}
        <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        <br />
        </label>
        <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
        </label>
        <br />
        <input type="submit" value={this.formType} />
      </form>
    );
  }
}

export default SessionForm;
