import React from 'react';
import AdminSettingButton from './AdmingSettingButton';
import styled from 'styled-components';

export default {
  title: 'accountbook-social-page/admin-setting-button/AdminSettingButton',
  component: AdminSettingButton,
};

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Default = (): JSX.Element => {
  return <AdminSettingButton />;
};

export const ApplyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <AdminSettingButton />
    </Wrapper>
  );
};
