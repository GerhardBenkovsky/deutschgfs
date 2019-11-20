import React from "react";

export default function Input(props) {
  return props.data.map(item => (
    <input
      type={item.type}
      name={item.name}
      value={props.getInputData(props.data.name)}
      onChange={props.handleChange}
      placeholder={item.display}
    />
  ));
}
