import React, { Component } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p<Props>`
  padding: ${(props) => props.paddingSize || '16px'};
`;

const Image = styled.img<Props>`
  padding: ${(props) => props.paddingSize || '16px'};
`;

const BorderImage = styled(Image)`
  border-style: solid;
  border-color: black;
`;

type Props = {
  title?: string;
  imgSrc?: string;
  paddingSize?: string;
};

type State = {};

export default class TextImage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <Paragraph paddingSize="10px">{this.props.title}</Paragraph>
        <Image paddingSize="10px" src={this.props.imgSrc} alt="" />
        <BorderImage paddingSize="10px" src={this.props.imgSrc} alt="" />
      </div>
    );
  }
}
