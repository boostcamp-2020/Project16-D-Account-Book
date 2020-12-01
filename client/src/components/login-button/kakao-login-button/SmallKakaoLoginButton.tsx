import React from 'react';
import styled from 'styled-components';
import smallKakaoLoginButtonImage from '../../../assets/images/kakao-login-small.png';
import LoginButton from '../../../types/loginButton';

const StyledDiv = styled.div<{ width: number }>`
  cursor: pointer;
  margin-right: 10px;
  img {
    width: ${(props) => props.width};
  }
`;
const SmallKakaoLoginButton: React.FC<LoginButton> = ({ onClick, width }: LoginButton) => {
  return (
    <StyledDiv onClick={onClick} width={width}>
      <img src={String(smallKakaoLoginButtonImage)} alt="kakao_login_button" width="120" />
    </StyledDiv>
  );
};

export default SmallKakaoLoginButton;
