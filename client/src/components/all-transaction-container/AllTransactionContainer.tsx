import React from 'react';
import Styled from 'styled-components';
import DayTransactionContainer from '../day-transaction-container/DayTransactionContainer';
import Income from '../../types/income';
import Expenditure from '../../types/expenditure';

interface Props {
  transactions: Array<Income | Expenditure>;
}

const AllTransactionContainer = ({ transactions }: Props): JSX.Element => {
  transactions.sort((transaction1, transaction2) => {
    return new Date(transaction2.date).getTime() - new Date(transaction1.date).getTime();
  });

  const sameDateTransactions = [] as Array<Array<Income | Expenditure>>;
  let index = -1;
  let beforeYear = 0;
  let beforeMonth = 0;
  let beforeDay = 0;

  transactions.forEach((transaction) => {
    const currentDate = new Date(transaction.date);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDay();

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

  return (
    <>
      {sameDateTransactions.map((transactions) => {
        return (
          <>
            {transactions.length > 0 && (
              <DayTransactionContainer
                key={'dayTransactions' + transactions[0].id}
                transactions={transactions}
              ></DayTransactionContainer>
            )}
          </>
        );
      })}
    </>
  );
};

export default AllTransactionContainer;
