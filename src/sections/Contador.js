import React, { Component } from 'react';

// Uso de "states"
export default class Contador extends Component {

  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };
    // definición de un timer
    setInterval(() => {
      this.setState(
        { contador: this.state.contador + 1 }
      )
    }, 1000);
  }

  render() {
    //const contador=0;
    return (<span>{this.state.contador}</span>);

  }
}

// Valores por defecto de los componentes
Contador.defaultProps = {
  contadorInicial: 0
}