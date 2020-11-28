import React from 'react';
import CreateButton from './CreateButton';
import styled from 'styled-components';

export default {
  title: 'common/menu-navigation/create-button/CreateButton',
  component: CreateButton,
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

export const Default: React.FC = () => {
  return <CreateButton width={24} height={24} />;
};

export const ApplyWrapper: React.FC = () => {
  return (
    <Wrapper>
      <CreateButton width={24} height={24} />
    </Wrapper>
  );
};
