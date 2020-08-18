import React, { Component } from 'react';

// Uso de props
export default  class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}