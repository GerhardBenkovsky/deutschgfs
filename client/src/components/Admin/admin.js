import React, { Component } from "react";

import InputForm from "./InputForm";
import EditLesson from "./editComp";

import "./style.css";

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: null
    };
  }

  renderNewLesson(event) {
    this.setState(prevstate => ({ render: "newLesson" }));
  }

  editLesson(event) {
    this.setState(prevstate => ({ render: "editLesson" }));
  }

  resetRender(event) {
    this.setState(prevstate => ({ render: null }));
  }

  render() {
    return this.state.render === null ? (
      <div>
        <button onClick={this.renderNewLesson.bind(this)} id="newLessonButton">
          Add new Lesson
        </button>
        <button onClick={this.editLesson.bind(this)} id="editButton">
          Edit existing lesson
        </button>
      </div>
    ) : this.state.render === "newLesson" ? (
      <InputForm reset={this.resetRender.bind(this)} />
    ) : (
      <EditLesson reset={this.resetRender.bind(this)} />
    );
  }
}
