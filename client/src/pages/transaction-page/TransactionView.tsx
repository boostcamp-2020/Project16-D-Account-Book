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
import { sortByRecentDate } from '../../utils/sortByRecentDate';

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

const TransactionView: React.FC<Props> = ({ accountbookId, query }: Props) => {
  const { rootStore } = useStore();
  const { dateStore, transactionStore, modalStore, accountStore, categoryStore } = rootStore;
  const { filterFormStore } = rootStore.modalStore;
  const { createTransactionFormStore, updateTransactionFormStore } = modalStore;
  const [totalIncome, totalExpenditure] = calcTotalAmount(transactionStore.transactions);

  const updateTransactions = () => {
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
    filterFormStore.query = query;
    filterFormStore.setFilterInfo();
  };

  useEffect(() => {
    socket.on(event.UPDATE_TRANSACTIONS, () => {
      updateTransactions();
    });
    socket.on(event.UPDATE_ACCOUNTS, () => {
      updateTransactions();
      accountStore.updateAccounts(accountbookId);
    });
    socket.on(event.UPDATE_INCOME_CATEGORIES, () => {
      updateTransactions();
      categoryStore.updateIncomeCategories(accountbookId);
    });
    socket.on(event.UPDATE_EXPENDITURE_CATEGORIES, () => {
      updateTransactions();
      categoryStore.updateExpenditureCategories(accountbookId);
    });
    return () => {
      socket.off(event.UPDATE_TRANSACTIONS);
      socket.off(event.UPDATE_ACCOUNTS);
      socket.off(event.UPDATE_INCOME_CATEGORIES);
      socket.off(event.UPDATE_EXPENDITURE_CATEGORIES);
    };
  }, [accountbookId]);

  useEffect(() => {
    updateTransactions();
  }, [query, accountbookId]);

  return (
    <>
      {filterFormStore.show && <FormModalFilter accountbookId={accountbookId} />}
      {createTransactionFormStore.show && <FormModalCreateTransaction />}
      {updateTransactionFormStore.show && <FormModalUpdateTransaction />}
      <Sidebar />
      <MenuNavigation />
      <HeaderNavigationRightTopWrapper>
        <HeaderNavigation currentPage={'transaction'} />
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
        <AllTransactionContainer
          transactions={sortByRecentDate(transactionStore.transactions).slice(0, transactionStore.items)}
        />
      </ViewWrapper>
    </>
  );
};

export default observer(TransactionView);
