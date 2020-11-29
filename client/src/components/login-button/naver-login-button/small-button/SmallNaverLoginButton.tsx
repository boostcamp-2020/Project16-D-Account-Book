import React from 'react';
import styled from 'styled-components';
import smallNaverLoginButtonImage from '../../../../assets/image/naver-login-small.png';
import LoginButton from '../../../../types/loginButton';

const SmallNaverLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return <img src={String(smallNaverLoginButtonImage)} alt="naver_login_button" onClick={onClick} />;
};

export default SmallNaverLoginButton;
