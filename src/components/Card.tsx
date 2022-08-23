import { useState } from 'react';
import React, { Component } from 'react';

type Props = {
  data: {
    fact: string;
    length: number;
  };
};

type State = {};

class Card extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <p>{this.props.data.fact}</p>
        <p>{this.props.data.length}</p>
      </div>
    );
  }
}

export default Card;
