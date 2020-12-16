import React, { useEffect } from 'react';
import DayTransactionContainer from '../day-transaction-container/DayTransactionContainer';
import Income, { isIncome } from '../../../../types/income';
import Expenditure from '../../../../types/expenditure';
import NotFoundTransaction from '../../not-found-transaction/NotFoundTransaction';
import Spinner from '../../spinner/Spinner';
import useStore from '../../../../hook/use-store/useStore';
import { observer } from 'mobx-react';

interface Props {
  transactions: Array<Income | Expenditure>;
}

const calcSameDateTransactions = (transactions: Array<Income | Expenditure>): Array<Array<Income | Expenditure>> => {
  const sameDateTransactions = [] as Array<Array<Income | Expenditure>>;
  let index = -1;
  let beforeYear = 0;
  let beforeMonth = 0;
  let beforeDay = 0;

  transactions.forEach((transaction) => {
    const currentDate = new Date(transaction.date);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    if (beforeYear == currentYear && beforeMonth == currentMonth && beforeDay == currentDay) {
      sameDateTransactions[index].push(transaction);
    } else {
      sameDateTransactions[++index] = [];
      sameDateTransactions[index].push(transaction);
    }

    beforeYear = currentYear;
    beforeMonth = currentMonth;
    beforeDay = currentDay;
  });
  return sameDateTransactions;
};

const AllTransactionContainer = ({ transactions }: Props): JSX.Element => {
  const { transactionStore } = useStore().rootStore;
  const sameDateTransactions = calcSameDateTransactions(transactions);

  useEffect(() => {
    return () => {
      transactionStore.isLoading = true;
    };
  }, []);

  if (transactionStore.isLoading) return <Spinner />;
  if (transactions.length == 0) return <NotFoundTransaction />;

  return (
    <>
      {sameDateTransactions.map((transactions) => {
        return (
          <div key={isIncome(transactions[0]) ? `income${transactions[0].id}` : `expenditure${transactions[0].id}`}>
            {transactions.length > 0 && <DayTransactionContainer transactions={transactions}></DayTransactionContainer>}
          </div>
        );
      })}
    </>
  );
};

export default observer(AllTransactionContainer);
