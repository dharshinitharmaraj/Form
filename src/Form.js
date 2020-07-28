import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      topic: "Select",
      password: "",
      Confirmpassword: "",
      PasswordError: ""
    };
  }

  validate = () => {
    let PasswordError = "";

    if (this.state.password.length < 8) {
      alert("Passwords should have minimum 8 characters !");
      return false;
    }

    if (this.state.password != this.state.Confirmpassword) {
      alert("Passwords dont Match !");
      return false;
    }
    return true;
  };
  mySubmitHandler = event => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      alert("Hello " + this.state.username);
    }
    event.preventDefault();
  };
  myChangehadler = event => {
    this.setState({ username: event.target.value });
  };
  EmailChangehadler = event => {
    this.setState({ email: event.target.value });
  };
  TopicHandle = event => {
    this.setState({ topic: event.target.value });
  };
  passwordHandler = event => {
    this.setState({ password: event.target.value });
  };

  ConfirmpasswordHandler = event => {
    this.setState({ Confirmpassword: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <div>
          <label>UserName : </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.myChangehadler}
          />
          <label>Email : </label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.EmailChangehadler}
          />
          <label>Password : </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordHandler}
          />
          <div style={{ font: "10px" }}> * Minimum 8 characters</div>
          <label>Confirm Password : </label>
          <input
            type="password"
            value={this.state.Confirmpassword}
            onChange={this.ConfirmpasswordHandler}
          />
          <div style={{ color: "red" }}>{this.state.PasswordError}</div>
          <label>Interest : </label>
          <select value={this.state.topic} onChange={this.TopicHandle}>
            <option value="select"> Select</option>
            <option value="HTML"> HTML</option>
            <option value="CSS"> CSS</option>
            <option value="React"> React</option>
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
