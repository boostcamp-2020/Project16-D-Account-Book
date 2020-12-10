import React from 'react';
import styled from 'styled-components';
import AccountbookSetting from '../accontbook-setting/AccountbookSetting';
import AccountbookElimination from '../accountbook-elimination/AccountbookElimination';

import { getTextColor } from '../../../utils/color';
import useStore from '../../../hook/use-store/useStore';
import { Accountbook } from '../../../types/accountbook';

const AccountbookWrapper = styled.div<{
  bgColor: string;
  textColor: string;
}>`
  box-sizing: border-box;
  width: 100%;
  min-width: 80px;
  height: 100%;
  max-height: 200px;
  min-height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  padding: 15px;
  display: flex;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 3px 7px gray;
  }
  border-radius: 10px;
`;

const ElementsWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const ElementWrapper = styled.div`
  padding-left: 10px;
`;

const AccountbookCard = (accountbook: Accountbook): JSX.Element => {
  const { rootStore } = useStore();
  const textColor = getTextColor(accountbook.color);
  return (
    <AccountbookWrapper bgColor={accountbook.color} textColor={textColor}>
      <ElementsWrapper>
        <ElementWrapper>
          <AccountbookSetting id={accountbook.id} bgColor={accountbook.color} />
        </ElementWrapper>
        <ElementWrapper>
          <AccountbookElimination id={accountbook.id} bgColor={accountbook.color} />
        </ElementWrapper>
      </ElementsWrapper>
    </AccountbookWrapper>
  );
};

export default AccountbookCard;
