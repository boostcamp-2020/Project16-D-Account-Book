import React from 'react';
import styled from 'styled-components';
import largeNaverLoginButtonImage from '../../../assets/images/naver-login-large.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div`
  cursor: pointer;
  margin-right: 10px;
  img {
    width: 220px;
  }
`;

const LargeNaverLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick}>
      <img src={String(largeNaverLoginButtonImage)} alt="naver_login_button" />
    </StyledDiv>
  );
};

export default LargeNaverLoginButton;
