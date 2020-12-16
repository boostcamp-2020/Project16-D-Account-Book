import React, { memo } from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';
import useStore from '../../../hook/use-store/useStore';
import { convertToAccountObj } from '../modals/formUtils';
import { SingleAccount } from '../../../types/account';

const AccountWrapper = styled.div<{ bgColor: string; textColor: string; shadow?: boolean; preview?: string }>`
  width: 17vw;
  height: 10vw;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  pointer-events: ${({ preview }) => preview};
  box-sizing: border-box;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    box-shadow: ${({ shadow }) => (shadow === true ? '2px 3px 7px gray' : 0)};
  }
`;

const Account = (singleAccount: SingleAccount): JSX.Element => {
  const { rootStore } = useStore();
  const updateAccountForm = rootStore.modalStore.updateAccountFormStore;

  const openUpdateAccountForm = (): void => {
    updateAccountForm.toggleShow();
    const account = convertToAccountObj(singleAccount.id, singleAccount.name, singleAccount.color);
    updateAccountForm.loadAccount(account);
  };

  const textColor = getTextColor(singleAccount.color);
  return (
    <AccountWrapper
      bgColor={singleAccount.color}
      textColor={textColor}
      shadow={singleAccount.shadow}
      preview={singleAccount.preview}
      onClick={openUpdateAccountForm}
    >
      {singleAccount.name}
    </AccountWrapper>
  );
};

export default memo(Account);
