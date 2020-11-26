import React, { useState } from 'react';
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
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState(11);
  return <ChangeDateContainer year={year} month={month} setYear={setYear} setMonth={setMonth} />;
};

export const ApplyWrapper: React.FC = () => {
  const [year, setYear] = useState(12);
  const [month, setMonth] = useState(10);
  return (
    <Wrapper>
      <ChangeDateContainer year={year} month={month} setYear={setYear} setMonth={setMonth} />
    </Wrapper>
  );
};
