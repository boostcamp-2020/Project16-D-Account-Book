import React from 'react';
import TopButton from './TopButton';
import styled from 'styled-components';

export default {
  title: 'top-button/TopButton',
  component: TopButton,
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

export const Default: React.FC = () => {
  return <TopButton width={24} height={24} />;
};

export const ApplyWrapper: React.FC = () => {
  return (
    <Wrapper>
      <TopButton width={24} height={24} />
    </Wrapper>
  );
};
