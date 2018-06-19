import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>{this.props.messge}</div>;
  }
}

var mountNode = document.getElementById("root");
ReactDOM.render(<HelloMessage message="No Create React App" />, mountNode);