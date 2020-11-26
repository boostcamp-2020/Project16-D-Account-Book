import React from 'react';
import NextButton from './NextButton';
import styled from 'styled-components';
import ChangeDateContainer from '../change-date-container/ChangeDateContainer';

export default {
  title: 'next-button/NextButton',
  component: NextButton,
};

export const Default: React.FC = () => {
  return <NextButton />;
};

const Div = styled.div`
  width: 120px;
  height: 100px;
  border: 1px solid black;
`;

export const SmallNextButton: React.FC = () => {
  return (
    <Div>
      <NextButton />
    </Div>
  );
};
