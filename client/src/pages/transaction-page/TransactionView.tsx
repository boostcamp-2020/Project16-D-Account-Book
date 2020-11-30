import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/common/sidebar/Sidebar';
import HeaderNavigation from '../../components/common/header-navigation/HeaderNavigation';
import ChangeDateContainer from '../../components/common/change-date-container/ChangeDateContainer';
import Amount from '../../components/common/amount/Amonut';
import AllTransactionContainer from '../../components/common/transactions/all-transaction-container/AllTransactionContainer';
import { smallAccountbookItems } from '../../__dummy-data__/components/smallAccountbookItem/dummyData';
import MenuNavigation from '../../components/common/menu-navigation/MenuNavigation';
import useStore from '../../hook/use-store/useStore';
import { useObserver } from 'mobx-react';
import { isIncome } from '../../types/income';

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

interface Props {
  accountbookId: number;
}

const TransactionView: React.FC<Props> = ({ accountbookId }: Props) => {
  const { dateStore, transactionStore } = useStore();

  // TODO: accountbook_id를 1로 고정해놨는데 추후에 현재 사용자가 선택한 accountbook_id를 사용하도록 수정해야함
  useEffect(() => {
    transactionStore.findTransactions(accountbookId, dateStore.startDate, dateStore.endDate);
  }, []);

  let totalIncome = 0;
  let totalExpenditure = 0;
  transactionStore.transactions.forEach((transaction) => {
    if (isIncome(transaction)) {
      totalIncome += transaction.amount;
    } else {
      totalExpenditure += transaction.amount;
    }
  });

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
            <Amount text={'수입'} amount={totalIncome} />
          </AmountWrapper>
          <AmountWrapper>
            <Amount text={'지출'} amount={totalExpenditure} />
          </AmountWrapper>
        </TransactionHeaderWrapper>
        <AllTransactionContainer transactions={transactionStore.transactions} />
      </PageWrapper>
    </>
  ));
};

export default TransactionView;
