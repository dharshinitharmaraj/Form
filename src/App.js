import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "./main.css";

class Test extends React.Component {
  render() {
    return <Form />;
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
