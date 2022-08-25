import React from 'react';
import styled from 'styled-components';
import LogoSrc from '../img/school.png';

const StyledLogo = styled.img`
display: block;
border-radius: 20%;
border: 3px solid #fff;
margin: auto;
margin-top: 10px;
width: 100px;
height: 100px;
}
`;

const Logo = () => {
  return <StyledLogo src={LogoSrc} alt="Company Logo" />;
};

export default Logo;
