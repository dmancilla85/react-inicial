import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    // renombrar props como 
    // variables locales.
    const {
      isActivated,
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props;

    // función ternaria
    const textoSegunBool = isActivated ? 'Cierto' : 'Falso';
    // aplicar una función a elementos de un vector (map)
    const mappedNumbers = arrayOfNumbers.map(multiply);

    console.log(`Literalmente es: ${textoSegunBool}`);

    return (<div>
      {title}
      <p>{// array de elementos
        // separados por coma
        mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
    </div>);
  }
}