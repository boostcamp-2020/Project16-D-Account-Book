import React from 'react';
import styled from 'styled-components';
import largeNaverLoginButtonImage from '../../../assets/images/naver-login-large.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div<{ width: number }>`
  cursor: pointer;
  img {
    width: ${(props) => props.width};
  }
`;

const LargeNaverLoginButton: React.FC<LoginButton> = ({ onClick, width }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick} width={width}>
      <img src={String(largeNaverLoginButtonImage)} alt="naver_login_button" width="200" />
    </StyledDiv>
  );
};

export default LargeNaverLoginButton;
