import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

export default class Article extends Component{
  static propTypes={
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    myDate: PropTypes.string.isRequired
  };
  
  constructor(props){
    super(props);

    if(typeof props.author==='undefined'){
      console.warn('author prop is required');
      throw new Error('author prop is required');
    }
  }
  
  render(){
    const{author,children,myDate,title}=this.props;

    return(
      <section>
        <h2>{this.props.title}</h2>
        {author && <p><em>Escrito por {this.props.author}</em></p>}
        <Box>{this.props.myDate}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    );
  }
}