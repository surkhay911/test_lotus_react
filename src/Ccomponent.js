import React, { Component } from 'react';
import Afcomponent from './Afcomponent';

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        <Afcomponent/>
        <h1>Class Component {this.props.name}</h1>
      </div>
    );
  }
}

Ccomponent.defaultProps = {name: "Alexey"}