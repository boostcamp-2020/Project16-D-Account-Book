import React from 'react';
import ChangeDateContainer from './ChangeDateContainer';
import styled from 'styled-components';

export default {
  title: 'change-date-container/ChangeDateContainer',
  component: ChangeDateContainer,
};

const Wrapper = styled.div`
  width: 200px;
  border: 1px solid black;
`;

export const Default: React.FC = () => {
  return <ChangeDateContainer accountbookId={1} />;
};

export const ApplyWrapper: React.FC = () => {
  return (
    <Wrapper>
      <ChangeDateContainer accountbookId={1} />
    </Wrapper>
  );
};
