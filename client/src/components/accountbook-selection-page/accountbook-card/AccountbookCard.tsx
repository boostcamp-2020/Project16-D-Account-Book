import React from 'react';
import styled from 'styled-components';
import AccountbookSetting from '../accontbook-setting/AccountbookSetting';
import AccountbookElimination from '../accountbook-elimination/AccountbookElimination';
import { useHistory } from 'react-router-dom';
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
  margin-bottom: 15px;
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
  const {
    deleteAccountbookByAdminStore,
    deleteAccountbookByUserStore,
    giveAdminStore,
  } = useStore().rootStore.modalStore;
  const history = useHistory();

  const onClickDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (userStore.isAdmin(accountbook.accountbookId as number)) {
      deleteAccountbookByAdminStore.setShow(true);
      giveAdminStore.selectedAccountbookId = accountbook.accountbookId as number;
    } else {
      deleteAccountbookByUserStore.setShow(true);
      deleteAccountbookByUserStore.selectedAccountbookId = accountbook.accountbookId as number;
    }
  };

  const textColor = getTextColor(accountbook.color);
  return (
    <AccountbookWrapper
      bgColor={accountbook.color}
      textColor={textColor}
      onClick={() => history.push(`/accountbooks/${accountbook.accountbookId}`)}
    >
      <HeaderWrapper>
        <ElementWrapper>
          <AccountbookSetting accountbookId={accountbook.accountbookId} bgColor={accountbook.color} />
        </ElementWrapper>
        <ElementWrapper>
          <AccountbookElimination bgColor={accountbook.color} onClick={onClickDelete} />
        </ElementWrapper>
      </HeaderWrapper>
      <TitleWrapper>{accountbook.title}</TitleWrapper>
      {accountbook.description}
    </AccountbookWrapper>
  );
};

export default AccountbookCard;
