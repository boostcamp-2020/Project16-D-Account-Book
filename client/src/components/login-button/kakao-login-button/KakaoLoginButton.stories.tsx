import React from 'react';
import LargeKakaoLoginButton from './LargeKakaoLoginButton';
import SmallKakaoLoginButton from './SmallKakaoLoginButton';

export default {
  title: 'Login-Page/KakaoLoginButton',
};

export const LargeButton = (): JSX.Element => {
  return <LargeKakaoLoginButton width={200} />;
};

export const SmallButton = (): JSX.Element => {
  return <SmallKakaoLoginButton width={200} />;
};
