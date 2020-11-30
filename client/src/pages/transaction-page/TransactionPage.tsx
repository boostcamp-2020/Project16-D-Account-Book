import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/common/sidebar/Sidebar';
import HeaderNavigation from '../../components/common/header-navigation/HeaderNavigation';
import ChangeDateContainer from '../../components/common/change-date-container/ChangeDateContainer';
import Amount from '../../components/common/amount/Amonut';
import AllTransactionContainer from '../../components/common/transactions/all-transaction-container/AllTransactionContainer';
import { transactions } from '../../__dummy-data__/components/transactions/dummyData';
import { smallAccountbookItems } from '../../__dummy-data__/components/smallAccountbookItem/dummyData';
import MenuNavigation from '../../components/common/menu-navigation/MenuNavigation';
import { DateProvider } from '../../store/DateStore';
import { getTransactions } from '../../services/transaction';
import useStore from '../../hook/use-store/useStore';
import { useObserver } from 'mobx-react';

const PageWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const HeaderNavigationWrapper = styled.div`
  position: absolute;
  right: 2%;
  top: 2%;
`;

const TransactionHeaderWrapper = styled.div`
  width: 220px;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2.5rem;
`;

const AmountWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  &:nth-child(2) {
    padding-top: 1rem;
  }
`;

const TransactionPage: React.FC = () => {
  const { dateStore, transactionStore } = useStore();

  useEffect(() => {
    transactionStore.findTransactions(1, dateStore.startDate, dateStore.endDate);
  }, []);

  return useObserver(() => (
    <>
      <Sidebar smallAccountbooks={smallAccountbookItems} />
      <MenuNavigation />
      <HeaderNavigationWrapper>
        <HeaderNavigation currentPage={'transaction'} />
      </HeaderNavigationWrapper>
      <PageWrapper>
        <TransactionHeaderWrapper>
          <ChangeDateContainer />
          <AmountWrapper>
            <Amount text={'수입'} amount={10000} />
          </AmountWrapper>
          <AmountWrapper>
            <Amount text={'지출'} amount={10000} />
          </AmountWrapper>
        </TransactionHeaderWrapper>
        <AllTransactionContainer transactions={transactionStore.transactions} />
      </PageWrapper>
    </>
  ));
};

export default TransactionPage;
