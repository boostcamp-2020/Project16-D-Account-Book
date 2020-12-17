import React from 'react';
import styled from 'styled-components';
import naverLogo from '../../assets/images/naver-abbreviation.png';

const StyledDiv = styled.div`
  img {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 3px;
  }
`;

const NaverLogo: React.FC = () => {
  return (
    <StyledDiv>
      <img src={String(naverLogo)} alt="naver_logo" />
    </StyledDiv>
  );
};

export default NaverLogo;
