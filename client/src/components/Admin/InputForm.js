import React from "react";

import Input from "./inputComp";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTypes: [
        { name: "id", type: "text", display: "ID" },
        { name: "title", type: "text", display: "Title" },
        { name: "content", type: "textarea", display: "Content" }
      ],
      linkCounter: 0,
      Output: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getInputData = this.getInputData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.Output);
  }

  handleChange(event) {
    event.preventDefault();
    event.persist();
    this.setState(prevState => ({
      Output: {
        ...prevState.Output,
        [event.target.name]: event.target.value
      }
    }));
  }

  getInputData(what) {
    return this.state.what;
  }

  addLink(event) {
    let counter = this.state.linkCounter;
    this.setState(state =>
      state.inputTypes.push({
        name: "link" + counter,
        type: "text",
        display: "Link"
      })
    );
    this.setState(state => ({ linkCounter: state.linkCounter + 1 }));
  }

  removeLink(event) {
    if (this.state.linkCounter === 0) {
      return;
    }
    let index = this.state.inputTypes.indexOf("link" + this.state.linkCounter);
    this.setState(state => state.inputTypes.splice(index, 1));
    this.setState(state => ({ linkCounter: state.linkCounter - 1 }));
  }

  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <div className="InputForm" style={style}>
        <button onClick={this.props.reset}>Reset</button>
        <h1>Add new Lesson</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            data={this.state.inputTypes}
            handleChange={this.handleChange}
            getInputData={this.getInputData}
          />
          <br />
          <button onClick={this.addLink.bind(this)} id="addLink" type="button">
            Add link
          </button>
          <button
            onClick={this.removeLink.bind(this)}
            id="removeLink"
            type="button"
          >
            Remove link
          </button>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InputForm;
