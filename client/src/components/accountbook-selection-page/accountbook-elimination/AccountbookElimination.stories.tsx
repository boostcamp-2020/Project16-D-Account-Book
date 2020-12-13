import React from 'react';
import AccountbookElimination from './AccountbookElimination';
import styled from 'styled-components';

export default {
  title: 'Accountbook-Selection-Page/AccountbookElimination',
  component: AccountbookElimination,
};

const TempDiv = styled.div<{ bgColor: string }>`
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;

export const WhiteItem = (): JSX.Element => {
  const tempColor1 = '#000000';
  return (
    <TempDiv bgColor={tempColor1}>
      <AccountbookElimination id={1} bgColor={tempColor1} />
    </TempDiv>
  );
};

export const BlackItem = (): JSX.Element => {
  const tempColor2 = '#E0F8EC';
  return (
    <TempDiv bgColor={tempColor2}>
      <AccountbookElimination id={2} bgColor={tempColor2} />
    </TempDiv>
  );
};
