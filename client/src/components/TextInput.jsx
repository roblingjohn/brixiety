import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <div className={"text-input " + this.props.classProp || ""}>
        <p className="text-input-label">{this.props.label}</p>
        <input className="text-input-box"/>
      </div>
    );
  }
}

export default TextInput;
