import React from 'react';
import styled from 'styled-components';
import smallNaverLoginButtonImage from '../../../assets/images/naver-login-small.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div<{ width: number }>`
  cursor: pointer;
  img {
    width: ${(props) => props.width};
  }
`;

const SmallNaverLoginButton: React.FC<LoginButton> = ({ onClick, width }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick} width={width}>
      <img src={String(smallNaverLoginButtonImage)} alt="naver_login_button" width="150" />
    </StyledDiv>
  );
};

export default SmallNaverLoginButton;
