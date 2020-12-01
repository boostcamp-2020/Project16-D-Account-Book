import React from 'react';
import styled from 'styled-components';
import largeKakaoLoginButtonImage from '../../../assets/images/kakao-login-large.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div<{ width: number }>`
  cursor: pointer;
  margin-right: 10px;
  img {
    width: ${(props) => props.width};
  }
`;

const LargeKakaoLoginButton: React.FC<LoginButton> = ({ onClick, width }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick} width={width}>
      <img src={String(largeKakaoLoginButtonImage)} alt="kakao_login_button" width="185" />
    </StyledDiv>
  );
};

export default LargeKakaoLoginButton;
