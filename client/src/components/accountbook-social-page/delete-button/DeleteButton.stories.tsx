import React from 'react';
import DeleteButton from './DeleteButton';
import styled from 'styled-components';

export default {
  title: 'accountbook-social-page/delete-button/DeleteButton',
  component: DeleteButton,
};

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Default = (): JSX.Element => {
  return <DeleteButton />;
};

export const ApplyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <DeleteButton />
    </Wrapper>
  );
};
