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
  padding: 15px 15px 20px 15px;
  display: flex;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 3px 7px gray;
  }
  border-radius: 10px;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const ElementWrapper = styled.div`
  padding-left: 10px;
`;

const TitleWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 10px;
`;

const AccountbookCard = (accountbook: Accountbook): JSX.Element => {
  const { userStore } = useStore().rootStore;
  const { deleteAccountbookByAdminStore, deleteAccountbookByUserStore } = useStore().rootStore.modalStore;

  const onClickDelete = () => {
    if (userStore.isAdmin(accountbook.accountbookId as number)) {
      deleteAccountbookByAdminStore.setShow(true);
    } else {
      deleteAccountbookByUserStore.setShow(true);
    }
  };

  const textColor = getTextColor(accountbook.color);
  return (
    <AccountbookWrapper bgColor={accountbook.color} textColor={textColor}>
      <HeaderWrapper>
        <ElementWrapper>
          <AccountbookSetting id={accountbook.id} bgColor={accountbook.color} />
        </ElementWrapper>
        <ElementWrapper>
          <AccountbookElimination id={accountbook.id} bgColor={accountbook.color} onClick={onClickDelete} />
        </ElementWrapper>
      </HeaderWrapper>
      <TitleWrapper>{accountbook.title}</TitleWrapper>
      {accountbook.description}
    </AccountbookWrapper>
  );
};

export default AccountbookCard;
