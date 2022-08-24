import React, { Component } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  max-width: 90%;
  height: 50px;
  text-align: center;
  display: block;
  margin: auto;
  font-size: 16px;
`;

type Props = {
  text?: string;
};

type State = {};

export default class StyledParagraph extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Paragraph>{this.props.text}</Paragraph>
      </>
    );
  }
}
