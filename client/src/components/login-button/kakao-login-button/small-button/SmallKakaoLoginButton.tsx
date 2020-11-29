import React from 'react';
import smallKakaoLoginButtonImage from '../../../../assets/image/kakao-login-small.png';
import LoginButton from '../../../../types/loginButton';

const SmallKakaoLoginButton: React.FC<LoginButton> = ({ onClick }: LoginButton) => {
  return <img src={String(smallKakaoLoginButtonImage)} alt="kakao_login_button" onClick={onClick} />;
};

export default SmallKakaoLoginButton;
