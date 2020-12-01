import React from 'react';
import styled from 'styled-components';
import smallNaverLoginButtonImage from '../../../assets/images/naver-login-small.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div`
  cursor: pointer;
  img {
    width: 150px;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 80px;
    }
  }
`;

const SmallNaverLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick}>
      <img src={String(smallNaverLoginButtonImage)} alt="naver_login_button" />
    </StyledDiv>
  );
};

export default SmallNaverLoginButton;
