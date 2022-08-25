import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  max-width: 90%;
  height: 50px;
  text-align: center;
  display: block;
  margin: auto;
  font-size: 16px;
`;

interface IParagraph {
  text?: string;
}

const Paragraph = ({ text }: IParagraph) => {
  return (
    <>
      <StyledParagraph>{text}</StyledParagraph>
    </>
  );
};

export default Paragraph;
