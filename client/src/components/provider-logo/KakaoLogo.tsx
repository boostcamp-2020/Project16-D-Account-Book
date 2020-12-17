import React from 'react';
import styled from 'styled-components';
import kakaoLogo from '../../assets/images/kakao-abbreviation.png';

const StyledDiv = styled.div`
  margin-right: 0.5rem;
  img {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 3px;
  }
`;

const KakaoLogo: React.FC = () => {
  return (
    <StyledDiv>
      <img src={String(kakaoLogo)} alt="kakao_logo" />
    </StyledDiv>
  );
};

export default KakaoLogo;
