import React from 'react';
import styled from 'styled-components';
import LargeKakaoLoginButton from '../../components/login-button/kakao-login-button/LargeKakaoLoginButton';
import SmallKakaoLoginButton from '../../components/login-button/kakao-login-button/SmallKakaoLoginButton';
import LargeNaverLoginButton from '../../components/login-button/naver-login-button/LargeNaverLoginButton';
import SmallNaverLoginButton from '../../components/login-button/naver-login-button/SmallNaverLoginButton';

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
    padding-top: 80px;
    display: flex;
    margin: 0 auto;
  }
`;

const Title = styled.div`
  font-size: 60px;
  width: max-content;
  font-weight: 800;
  font-family: 'Spoqa Han Sans';
  background: -webkit-linear-gradient(left, #00d157, #00b7cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 97%;

  @media screen and (max-width: 992px) {
    font-size: 50px;
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    font-size: 35px;
    text-align: center;
    margin: 0 auto;
  }
`;

const LoginPage: React.FC = () => {
  return (
    <MainContainer>
      <Title>
        Manage <br />
        Our <br />
        Accountbook
      </Title>
      <LargeLoginButtonContainer>
        <LargeKakaoLoginButton width={200} />
        <LargeNaverLoginButton width={200} />
      </LargeLoginButtonContainer>
      <SmallLoginButtonContainer>
        <SmallKakaoLoginButton width={150} />
        <SmallNaverLoginButton width={150} />
      </SmallLoginButtonContainer>
    </MainContainer>
  );
};

export default LoginPage;
