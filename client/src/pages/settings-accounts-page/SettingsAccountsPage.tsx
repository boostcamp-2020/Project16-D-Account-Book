import React, { useState } from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import Account from '../../components/common/account/Account';
import AddAccountButton from '../../components/common/add-account-button/AddAccountButton';
import { accountsDummy } from '../../__dummy-data__/components/settings/accountData';

const SettingsAccountsPageWrapper = styled.div`
  display: flex;
`;

const SettingsBody = styled.div`
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

const SettingsAccountsPage = (): JSX.Element => {
  // TODO: setter의 경우 카테고리 생성, 변경 모달창 구현 시 작업 예정
  const [accounts, setAccounts] = useState(accountsDummy);

  const AccountsItems = accounts.map((item) => (
    <AccountItemWrapper key={item.id}>
      <Account key={item.id} text={item.name} bgColor={item.color} shadow={true} />
    </AccountItemWrapper>
  ));

  return (
    <SettingsAccountsPageWrapper>
      <SettingsSidebar currentPage={'accounts'} />
      <SettingsBody>
        <SettingsItemWrapper>
          <Label>결제수단 관리</Label>
          <AccountWrapper>
            {AccountsItems}
            <AccountItemWrapper>
              <AddAccountButton />
            </AccountItemWrapper>
          </AccountWrapper>
        </SettingsItemWrapper>
      </SettingsBody>
    </SettingsAccountsPageWrapper>
  );
};

export default SettingsAccountsPage;
