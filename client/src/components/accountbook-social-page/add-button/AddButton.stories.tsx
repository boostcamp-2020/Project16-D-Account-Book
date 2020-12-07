import React from 'react';
import AddButton from './AddButton';
import styled from 'styled-components';

export default {
  title: 'accountbook-social-page/add-button/AddButton',
  component: AddButton,
};

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Default = (): JSX.Element => {
  return <AddButton />;
};

export const ApplyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <AddButton />
    </Wrapper>
  );
};
