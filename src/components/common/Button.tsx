import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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

interface IButton {
  buttonText?: string;
  className?: string;
}

const Button = ({ buttonText, className }: IButton) => {
  return (
    <>
      <StyledButton className={className}>{buttonText}</StyledButton>
    </>
  );
};

export default Button;
