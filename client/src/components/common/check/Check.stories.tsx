import React from 'react';
import CheckSuccess from './check-success/CheckSuccess';
import CheckFail from './check-fail/CheckFail';

export default {
  title: 'check',
  component: CheckSuccess,
  CheckFail,
};

export const CheckSuccessDefault: React.FC = () => {
  return <CheckSuccess />;
};

export const CheckFailDefault: React.FC = () => {
  return <CheckFail />;
};
