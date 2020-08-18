import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES ={
  panda: 'https://cdn140.picsart.com/290333907054201.jpg',
  cat:'http://3.bp.blogspot.com/-VyTaidcm5PE/VYCLFrQBTFI/AAAAAAAAAJ0/VYqPKnMH198/s1600/ae260662da12e61f5b6accb1c7cae4c8.jpeg',
  dolphin:'https://goo.gl/BbiKCd'
}

const ANIMALS= Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component{
  state = {src: ANIMAL_IMAGES[this.props.animal]}

  componentWillReceiveProps(nextProps){
    this.setState({src:ANIMAL_IMAGES[nextProps.animal]});
  }

  shouldComponentUpdate(nextProps){
    console.log(`anterior: ${this.props.animal}`);
    console.log(`nuevo: ${nextProps.animal}`);
    
    return (this.props.animal !== nextProps.animal);
  }

  componentWillUpdate(nextProps, nextState){
    console.log(`WillUpdate: ${nextProps} - ${nextState}`);
    const img = document.getElementById('myPicture');
    console.log(img);
    img.animate([  {
         filter: 'blur(0px)' 
        }, { 
         filter: 'blur(2px)'
        }], { 
          duration: 500, 
          easing: 'ease'
        });
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    const img = document.getElementById('myPicture');
    console.log(img);
    img.animate([  {
         filter: 'blur(2px)' 
        }, { 
         filter: 'blur(0px)'
        }], { 
          duration: 500, 
          easing: 'ease'
        });
  }

  render(){
    console.log('calling render...');
    return(
      <div>
        <p> Selected {this.props.animal}</p>
        <img
          id = "myPicture"
          alt={this.props.animal}
          src={this.state.src}
          width='250'
          />
      </div>
    )
  }
}

AnimalImage.propTypes={
  animal: PropTypes.oneOf(ANIMALS)
}

class Animal extends Component{
  state = {animal: 'panda'}

  _renderAnimalButton=(animal)=>{
    return(
      <button
        //disabled={animal===this.state.animal}
        key = {animal}
        onClick={()=>this.setState({animal})}>
        {animal}
        </button>
    )
  }

  render(){
    return(
      <div>
        <h4>ComponentWillReceiveProps</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal}/>
      </div>
    )
  }
}

export default Animal;