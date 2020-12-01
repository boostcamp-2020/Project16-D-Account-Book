import React from 'react';
import LargeNaverLoginButton from './LargeNaverLoginButton';
import SmallNaverLoginButton from './SmallNaverLoginButton';

export default {
  title: 'Login-Page/NaverLoginButton',
};

export const LargeButton = (): JSX.Element => {
  return <LargeNaverLoginButton width={200} />;
};

export const SmallButton = (): JSX.Element => {
  return <SmallNaverLoginButton width={200} />;
};
