import React from 'react';
import styled from 'styled-components';
import smallKakaoLoginButtonImage from '../../../assets/images/kakao-login-small.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div`
  cursor: pointer;
  margin-right: 50px;
  img {
    width: 120px;
  }

  @media screen and (max-width: 600px) {
    margin-right: 0px;
    margin-bottom: 20px;
    img {
      width: 80px;
    }
  }
`;
const SmallKakaoLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick}>
      <img src={String(smallKakaoLoginButtonImage)} alt="kakao_login_button" />
    </StyledDiv>
  );
};

export default SmallKakaoLoginButton;
