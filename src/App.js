import React, { Component } from 'react';

import logo from './logo.svg';
import ConditionalSection from './sections/Conditional'
import './App.css';
import { useState } from 'react';
import cars from './data/cars.json';
import Forms from './sections/Forms';
import Article from './sections/Article';
import Box from './sections/Box';
import Hello from './sections/Hello';
import Text from './sections/Text';
import Contador from './sections/Contador';
import FetchExample from './sections/FetchExample';
import Animal from './sections/Animal';

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

/* Valores por defecto */
Title.defaultProps = {
  text: 'Titulo por defecto'
}

class CarItem extends Component {
  render() {
    const { car } = this.props;

    return (
      <li >
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>)

  }
}

function handleClick(e) {
  console.log(e);
  console.log(e.nativeEvent);
  alert('Hi here!');
}


function App() {

  const numbers = [1, 1, 3, 4, 5];
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouseX(clientX);
    setMouseY(clientY);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello from props" />
      </header>
      <Title />
      <h4>Children props</h4>
      <Box>Hola! Soy un children!</Box>
      <Animal/>
      <FetchExample>Fetch...</FetchExample>
      <Article
        author="David"
        myDate={new Date().toLocaleDateString()}
        title="Articulo sobre la prop children">
        <p>El contenido que envolvemos dentro del componente sera enviado al componente como this.props.children</p>
        <strong>y mantiene los componentes y etiquetas que hayas agregado dentro</strong>
      </Article>
      <Contador contadorInicial={1} />
      <ConditionalSection />
      <Text
        arrayOfNumbers={[2, 3, 4]}
        isActivated
        number={3}
        multiply={(number) => number * 4}
        objectWithInfo={{ key: 'First value', key2: 'value2' }}
        text="Texto en string"
        title={<h1>Este es el otro título</h1>} />
      <div>
        <Forms />
      </div>
      <div style={{ // cambiar el color de un elemento
        backgroundColor: "#DF0066"
      }}>
        <h4>Trabajando con listas :P</h4>
        {numbers.map((number, index) => {
          // siempre hay que indicar el key
          return <p key={index}>Soy el número {number}</p>
        })}
      </div>
      <div>
        <h3>Trabajando con listas de objetos</h3>
        <ul>
          {
            cars.map(car => { return <CarItem key={car.id} car={car} /> })
          }
        </ul>
      </div>
      <div style={{ backgroundColor: "yellow" }}>
        <h4>Eventos</h4>
        <button onClick={handleClick}>Hi there!</button>
      </div>
      <div onMouseMove={handleMouseMove}
        style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
        <p>{mouseX}, {mouseY}</p>
      </div>
    </div>

  );
}


export default App;
