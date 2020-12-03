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
import Income, { isIncome } from '../../types/income';
import Expenditure from '../../types/expenditure';
import { ParsedQuery } from 'query-string';
import FilterOption from '../../components/transaction-page/filter-option/FilterOption';
import { useHistory } from 'react-router-dom';
import FormModalFilter from '../../components/common/modals/form-modal-filter/FormModalFilter';

const ViewWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const HeaderNavigationWrapper = styled.div`
  position: absolute;
  right: 2%;
  top: 2%;
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
  const { dateStore, transactionStore } = rootStore;
  const history = useHistory();
  const [totalIncome, totalExpenditure] = calcTotalAmount(transactionStore.transactions);

  useEffect(() => {
    if (!query) {
      transactionStore.findTransactions(accountbookId, dateStore.startDate, dateStore.endDate);
      return;
    }

    const { start_date, end_date, account, income_category, expenditure_category } = query;
    transactionStore.filterTransactions(accountbookId, {
      startDate: start_date,
      endDate: end_date,
      account: account,
      incomeCategory: income_category,
      expenditureCategory: expenditure_category,
    });
  }, [query]);

  return useObserver(() => (
    <>
      <FormModalFilter />
      <Sidebar smallAccountbooks={smallAccountbookItems} />
      <MenuNavigation />
      <HeaderNavigationWrapper>
        <HeaderNavigation currentPage={'transaction'} />
      </HeaderNavigationWrapper>
      <ViewWrapper>
        <TransactionHeaderWrapper>
          <button
            onClick={() =>
              history.push(
                `/accountbooks/1?start_date=2020.01.01&end_date=2021.01.01&income_category=%EA%B8%88%EC%9C%B5%EC%88%98%EC%9E%85&account=%EB%86%8D%ED%98%91`,
              )
            }
          >
            필터
          </button>
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
  ));
};

export default TransactionView;
