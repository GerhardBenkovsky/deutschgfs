import React from "react";
import axios from "axios";

// import Input from "./inputComp";

class EditLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      render: null,
      lesson: "grammatik"
    };

    this.setLesson = this.setLesson.bind(this);
  }

  componentDidMount() {
    axios.get(`/getdata/all`).then(res => {
      this.setState(state => ({ content: res.data }));
      console.log(res.data);
    });
  }

  setLesson() {
    let render = document.getElementById("SLT").value;
    this.setState(state => ({
      lesson: render
    }));
  }

  setRender() {
    this.setState(state => ({
      render: "lesson"
    }));
    console.log(this.lesson);
  }

  render() {
    return this.state.render === null ? (
      <React.Fragment>
        <select id="SLT" onChange={this.setLesson}>
          {this.state.content.map(item => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <button onClick={this.setRender.bind(this)}>GO</button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        {this.state.content.map(item =>
          item.id === this.lesson ? <h2>{item.title}</h2> : console.log(item.id)
        )}
      </React.Fragment>
    );
  }
}

export default EditLesson;
