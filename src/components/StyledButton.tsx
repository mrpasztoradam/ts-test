import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #87bdd8;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: auto;
  font-size: 16px;
  margin-bottom: 1rem;
`;

type Props = {
  buttonText: string;
};

type State = {};

export default class StyledButton extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Button>{this.props.buttonText}</Button>
      </>
    );
  }
}
