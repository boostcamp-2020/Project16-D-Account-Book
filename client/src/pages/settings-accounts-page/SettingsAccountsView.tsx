import React, { useEffect } from 'react';
import styled from 'styled-components';
import Account from '../../components/common/account/Account';
import AddAccountButton from '../../components/common/add-account-button/AddAccountButton';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import FormModalAccount from '../../components/common/modals/form-modal-account/FormModalCreateAccount';
import FormModalUpdateAccount from '../../components/common/modals/form-modal-account/FormModalUpdateAccount';
import socket, { event } from '../../socket';
import Spinner from '../../components/common/spinner/Spinner';

const SettingsAccountViewWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 25%;
  padding: 50px 50px;
`;

const SettingsItemWrapper = styled.div`
  width: 70vw;
  height: 50vw;
  margin-bottom: 5vh;
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 4vh;
`;

const AccountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const AccountItemWrapper = styled.div`
  width: 30%;
  margin-bottom: 5vh;
  margin-right: 2vw;
  cursor: pointer;
`;

interface Props {
  accountbookId: number;
}

const SettingsAccountsView: React.FC<Props> = ({ accountbookId }: Props) => {
  const { rootStore } = useStore();
  const { accountStore } = rootStore;
  const { show } = rootStore.modalStore.updateAccountFormStore;

  useEffect(() => {
    accountStore.updateAccounts(accountbookId);
  }, []);

  useEffect(() => {
    socket.on(event.UPDATE_ACCOUNTS, () => {
      accountStore.updateAccounts(accountbookId);
    });
    return () => {
      socket.off(event.UPDATE_ACCOUNTS);
    };
  }, [accountbookId]);

  const AccountsItems = accountStore.accounts.map((item) => (
    <AccountItemWrapper key={item.id}>
      <Account key={item.id} id={item.id} name={item.name} color={item.color} shadow={true} />
    </AccountItemWrapper>
  ));

  if (accountStore.isLoading) return <Spinner />;

  return (
    <SettingsAccountViewWrapper>
      <FormModalAccount />
      {show && <FormModalUpdateAccount />}
      <SettingsItemWrapper>
        <Label>결제수단 관리</Label>
        <AccountWrapper>
          <AccountItemWrapper>
            <AddAccountButton />
          </AccountItemWrapper>
          {AccountsItems}
        </AccountWrapper>
      </SettingsItemWrapper>
    </SettingsAccountViewWrapper>
  );
};

export default observer(SettingsAccountsView);
