import React, { Component } from 'react';

class CicloDeVida extends Component{
  
  constructor(){
    console.log('Se ejecuta antes de montar el componente');
    console.log('Inicializa el state del componente');
    console.log('No se puede utilizar el SetState');
  }

  componentWillReceiveProps(nextProps){
    console.log("Se llama cuando el componente está por recibir props")
  }
  
  shouldComponentUpdate(nextProps){
    console.log("Permite determinar si debe volver a renderizar")
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Se llama cuando se reciben nuevas props o states, previo a render");
  }

  render(){
    console.log('Es obligatorio');
    console.log('Retorna los elementos de la interfaz');
    console.log('No se debe llamar a setState -> loop infinito');
    return <h1>Hola!</h1>; 
  }

  componentDidMount(){
    console.log('Se ejecuta tras renderizar el componente.');
    console.log('Se pueden añadir llamar para recuperar datos del servidor y escuchar eventos.');
    console.log('Se puede usar el set state');
  }

  componentWillUnmount(){
    console.log("Se usa cuando el componente deja de utilizarse.");
    console.log("Permite eliminar suscripciones de eventos, liberar  recursos.")
    console.log("NO se puede llamar a setState");
  }
}

export default CicloDeVida;