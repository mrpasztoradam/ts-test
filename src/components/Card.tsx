import { useState } from 'react';
import React, { Component } from 'react';
import StyledButton from './StyledButton';
import StyledParagraph from './StyledParagraph';

type Props = {
  data: {
    fact?: string;
    length?: number;
    name?: string;
    imgUrl?: string;
  };
};

type State = {};

class Card extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <img
          className="card-image"
          src={
            this.props.data.imgUrl
              ? this.props.data.imgUrl
              : 'https://placehold.co/300'
          }
          alt=""
        />
        <p>{this.props.data.fact}</p>
        <StyledParagraph text={this.props.data.name}></StyledParagraph>
        <StyledButton buttonText="Tesztelek"></StyledButton>
      </>
    );
  }
}

export default Card;
