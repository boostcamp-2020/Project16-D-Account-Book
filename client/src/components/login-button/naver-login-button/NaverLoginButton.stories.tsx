import React from 'react';
import LargeNaverLoginButton from './LargeNaverLoginButton';
import SmallNaverLoginButton from './SmallNaverLoginButton';

export default {
  title: 'Login-Page/NaverLoginButton',
};

export const LargeButton = (): JSX.Element => {
  return <LargeNaverLoginButton />;
};

export const SmallButton = (): JSX.Element => {
  return <SmallNaverLoginButton />;
};
