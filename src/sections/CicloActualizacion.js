import React, { Component } from 'react';

class CicloActualizacion extends Component{
  
  state={hasError: false, errorMsg:''} 
  
  componentWillReceiveProps(nextProps){
    console.log('Se ejecuta si recibe props');
    console.log('Sirve para actualizar el state');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Determina si el componente se debe actualizar (render)');
    console.log('Devuelve un booleano, por defecto true');
    console.log('No se debe llamar a setState');
  }

  componentWillUpdate(nextProps, nextState){

  }

  render(){
    return <h1>hola</h1>;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Ejecutar funciones de librerías externas, usar nuevo DOM o llamadas a API');
    console.log('No usar setState');
  }

  componentDidCatch(error, info){
    console.log("Captura los errores de los componentes children");
    this.setState({hasError:true, errorMsg:error.toString()})
  }

}

export default CicloActualizacion;