import React from 'react';
import SettingButton from './SettingButton';
import styled from 'styled-components';

export default {
  title: 'common/menu-navigation/setting-button/SettingButton',
  component: SettingButton,
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

export const Default: React.FC = () => {
  return <SettingButton width={24} height={24} />;
};

export const ApplyWrapper: React.FC = () => {
  return (
    <Wrapper>
      <SettingButton width={24} height={24} />
    </Wrapper>
  );
};
