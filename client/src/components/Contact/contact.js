import React from 'react';

import './style.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xyypbken"
        method="POST"
        id="contact"
      >
        {/* <!-- add your custom form HTML here --> */}
        <input autoComplete="off" type="text" name="Name" placeholder="Name:" />
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email:"
        />
        <textarea
          autoComplete="off"
          type="text"
          name="message"
          placeholder="Nachricht:"
        />
        {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Senden</button>}
        {status === 'ERROR' && <p>Ooops! Alle Felder ausfüllen</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
