import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/common/sidebar/Sidebar';
import HeaderNavigation from '../../components/common/header-navigation/HeaderNavigation';
import ChangeDateContainer from '../../components/common/change-date-container/ChangeDateContainer';
import Amount from '../../components/common/amount/Amonut';
import AllTransactionContainer from '../../components/common/transactions/all-transaction-container/AllTransactionContainer';
import MenuNavigation from '../../components/common/menu-navigation/MenuNavigation';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import Income, { isIncome } from '../../types/income';
import Expenditure from '../../types/expenditure';
import { ParsedQuery } from 'query-string';
import FilterOption from '../../components/transaction-page/filter-option/FilterOption';
import FormModalFilter from '../../components/common/modals/form-modal-filter/FormModalFilter';
import FormModalCreateTransaction from '../../components/common/modals/form-modal-transaction/FormModalCreateTransaction';
import FormModalUpdateTransaction from '../../components/common/modals/form-modal-transaction/FormModalUpdateTransaction';
import HeaderNavigationRightTopWrapper from '../../components/common/header-navigation/HeaderNavigationRightTop';
import socket, { event } from '../../socket';

const ViewWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const TransactionHeaderWrapper = styled.div`
  width: 230px;
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
  query: ParsedQuery<string> | null;
}

const calcTotalAmount = (transactions: Array<Income | Expenditure>): Array<number> => {
  let totalIncome = 0;
  let totalExpenditure = 0;
  transactions.forEach((transaction) => {
    if (isIncome(transaction)) {
      totalIncome += transaction.amount;
    } else {
      totalExpenditure += transaction.amount;
    }
  });
  return [totalIncome, totalExpenditure];
};

const InfiniteScrollTestView: React.FC<Props> = ({ accountbookId, query }: Props) => {
  const { rootStore } = useStore();
  const { dateStore, transactionStore, modalStore } = rootStore;
  const { formFilterStore } = rootStore.modalStore;
  const { createTransactionFormStore, updateTransactionFormStore } = modalStore;
  const [totalIncome, totalExpenditure] = calcTotalAmount(transactionStore.transactions);

  const updateTransactions = () => {
    transactionStore.accountbookId = accountbookId;
    if (!query) {
      transactionStore.isFilterMode = false;
      transactionStore.findTransactions(accountbookId, dateStore.startDate, dateStore.endDate);
      return;
    }

    transactionStore.isFilterMode = true;
    const { start_date, end_date, account, income_category, expenditure_category } = query;
    transactionStore.filterTransactions(accountbookId, {
      startDate: start_date,
      endDate: end_date,
      account: account,
      incomeCategory: income_category,
      expenditureCategory: expenditure_category,
    });
    formFilterStore.query = query;
    formFilterStore.setFilterInfo();
  };

  useEffect(() => {
    socket.on(event.UPDATE_TRANSACTIONS, () => {
      updateTransactions();
    });
    return () => {
      socket.off(event.UPDATE_TRANSACTIONS);
    };
  }, [accountbookId]);

  useEffect(() => {
    updateTransactions();
  }, [query, accountbookId]);

  return (
    <>
      {formFilterStore.show && <FormModalFilter accountbookId={accountbookId} />}
      {createTransactionFormStore.show && <FormModalCreateTransaction />}
      {updateTransactionFormStore.show && <FormModalUpdateTransaction />}
      <Sidebar />
      <MenuNavigation />
      <HeaderNavigationRightTopWrapper>
        <HeaderNavigation currentPage={'calendar'} />
      </HeaderNavigationRightTopWrapper>
      <ViewWrapper>
        <TransactionHeaderWrapper>
          {query ? (
            <FilterOption
              query={{
                startDate: query.start_date,
                endDate: query.end_date,
                account: query.account,
                incomeCategory: query.income_category,
                expenditureCategory: query.expenditure_category,
              }}
              accountbookId={accountbookId}
            />
          ) : (
            <ChangeDateContainer accountbookId={accountbookId} />
          )}
          <AmountWrapper>
            <Amount text={'수입'} amount={totalIncome} />
          </AmountWrapper>
          <AmountWrapper>
            <Amount text={'지출'} amount={totalExpenditure} />
          </AmountWrapper>
        </TransactionHeaderWrapper>
        <AllTransactionContainer transactions={transactionStore.transactions} />
      </ViewWrapper>
    </>
  );
};

export default observer(InfiniteScrollTestView);
