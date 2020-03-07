import React, { Component } from 'react';

export default class Forms extends Component {

  constructor() {
    super();
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('twitter').value;
    console.log({ name, email })
  }

  handleSubmit(e) {
    this.handleClick(e);
  }

  handleChange=(e)=> {
    console.log("handleChange");
    console.log(e.target.checked);
    this.setState({ inputTerms: e.target.checked });
  }

  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='name'><strong>Nombre: </strong></label>
            <input
              id="name"
              name="userName"
              onChange={e => this.setState({ inputName: e.target.value })}
              placeholder="Introduce el nombre"
              value={this.state.inputName}
              ref={inputElement => this.inputName = inputElement}
            />
          </p>
          <p>
            <label htmlFor='twitter'>Twitter: </label>
            <input
              id="twitter"
              name="twitterAccount"
              value={this.state.inputTwitter}
              onChange={e => this.setState({ inputTwitter: e.target.value })}
              placeholder="Introduce el Twitter"
            />
          </p>
          <p>
            <label>
              <input
              onChange={this.handleChange}
                checked={this.state.inputTerms}
                type='checkbox' />
              Accepted Terms
            </label>
          </p>
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    )
  }
}