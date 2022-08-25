import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p<ITextImage>`
  padding: ${(props) => props.paddingSize || '16px'};
`;

const Image = styled.img<ITextImage>`
  padding: ${(props) => props.paddingSize || '16px'};
`;

const BorderImage = styled(Image)`
  border-style: solid;
  border-color: black;
`;

interface ITextImage {
  title?: string;
  imgSrc?: string;
  paddingSize?: string;
}

const TextImage = ({ title, imgSrc, paddingSize }: ITextImage) => {
  return (
    <div>
      <Paragraph paddingSize="10px">{title}</Paragraph>
      <Image paddingSize="10px" src={imgSrc} alt="" />
      <BorderImage paddingSize="10px" src={imgSrc} alt="" />
    </div>
  );
};

export default TextImage;
