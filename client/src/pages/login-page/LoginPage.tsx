import React from 'react';
import styled from 'styled-components';
import LargeKakaoLoginButton from '../../components/login-button/kakao-login-button/LargeKakaoLoginButton';
import SmallKakaoLoginButton from '../../components/login-button/kakao-login-button/SmallKakaoLoginButton';
import LargeNaverLoginButton from '../../components/login-button/naver-login-button/LargeNaverLoginButton';
import SmallNaverLoginButton from '../../components/login-button/naver-login-button/SmallNaverLoginButton';
import useStore from '../../hook/use-store/useStore';
import { useHistory } from 'react-router-dom';
import { useObserver } from 'mobx-react';
import authService from '../../services/auth';
import User from '../../types/user';

const MainContainer = styled.div`
  box-sizing: content-box;
  width: 90%;
  height: 85vh;
  padding: 2%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    align-content: center;
  }
`;

const LargeLoginButtonContainer = styled.div`
  margin-top: auto;
  display: flex;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const SmallLoginButtonContainer = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    padding-top: 50px;
    display: flex;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    padding-top: 30px;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Title = styled.div`
  font-size: 80px;
  width: max-content;
  font-weight: 800;
  font-family: 'Spoqa Han Sans';
  background: -webkit-linear-gradient(left, #00d157, #00b7cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 97%;

  @media screen and (max-width: 992px) {
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    font-size: 40px;
    text-align: center;
    margin: 0 auto;
  }
`;

const LoginPage: React.FC = () => {
  const { rootStore } = useStore();
  const history = useHistory();

  const kakaoLogin = async () => {
    const user: User = await authService.kakaoLogin;
    rootStore.userStore.updateUser(user);
    history.push('/');
  };

  const naverLogin = async () => {
    const user: User = await authService.naverLogin;
    rootStore.userStore.updateUser(user);
    history.push('/');
  };

  return useObserver(() => (
    <MainContainer>
      <Title>
        Manage <br />
        Our <br />
        Accountbook
      </Title>
      <LargeLoginButtonContainer>
        <LargeKakaoLoginButton onClick={kakaoLogin} />
        <LargeNaverLoginButton onClick={naverLogin} />
      </LargeLoginButtonContainer>
      <SmallLoginButtonContainer>
        <SmallKakaoLoginButton onClick={kakaoLogin} />
        <SmallNaverLoginButton onClick={naverLogin} />
      </SmallLoginButtonContainer>
    </MainContainer>
  ));
};

export default LoginPage;
