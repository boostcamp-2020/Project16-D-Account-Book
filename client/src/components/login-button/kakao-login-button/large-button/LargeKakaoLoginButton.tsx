import React from 'react';
import largeKakaoLoginButtonImage from '../../../../assets/image/kakao-login-large.png';
import LoginButton from '../../../../types/loginButton';

const LargeKakaoLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return <img src={String(largeKakaoLoginButtonImage)} alt="kakao_login_button" onClick={onClick} />;
};

export default LargeKakaoLoginButton;
