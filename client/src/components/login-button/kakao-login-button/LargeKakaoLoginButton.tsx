import React from 'react';
import styled from 'styled-components';
import largeKakaoLoginButtonImage from '../../../assets/images/kakao-login-large.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div`
  cursor: pointer;
  margin-right: 10px;
  img {
    width: 200px;
  }
`;

const LargeKakaoLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick}>
      <img src={String(largeKakaoLoginButtonImage)} alt="kakao_login_button" />
    </StyledDiv>
  );
};

export default LargeKakaoLoginButton;
