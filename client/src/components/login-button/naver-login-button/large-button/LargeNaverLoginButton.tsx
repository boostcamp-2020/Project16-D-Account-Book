import React from 'react';
import largeNaverLoginButtonImage from '../../../../assets/image/naver-login-large.png';
import LoginButton from '../../../../types/loginButton';

const LargeNaverLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return <img src={String(largeNaverLoginButtonImage)} alt="kakao_login_button" onClick={onClick} />;
};

export default LargeNaverLoginButton;
