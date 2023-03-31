import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <div className={"text-input " + this.props.classProp || ""}>
        <p className="text-input-label">{this.props.label}</p>
        <select className="boolean-input">
          <option value={null}>--</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
    );
  }
}

export default TextInput;
