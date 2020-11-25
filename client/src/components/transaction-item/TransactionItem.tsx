import React from 'react';
import Styled from 'styled-components';
import Category from '../category/Category';
import { numberWithCommas } from '../../utils/number';
import { RED, BLUE } from '../../constants/color';
import Income, { isIncome } from '../../types/income';
import Expenditure from '../../types/expenditure';

const TransactionItemWrapper = Styled.div`
  display: flex;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  margin-auto: 0;
  cursor: pointer;
  &:hover {
    background-color: #F7F7F7;
  }
`;

const CategoryWrapper = Styled.div`
  width: 100%;
`;

const ContentItemWrapper = Styled.div<{ isIncome?: boolean }>`
  display: flex;
  text-align: center;
  justify-content: center;
  &:nth-child(1) {
    width: 12%;
    justify-content: flex-start;
  }
  &:nth-child(2) {
    flex-direction: column;
    width: 16%;
    text-align: left;
    padding-left: 10px;
  }
  &:nth-child(3) {
    flex-direction: column;
    text-align: left;
    width: 56%;
  }
  &:nth-child(4) {
    flex-direction: column;
    font-size: 20px;
    width: 16%;
    text-align: right;
    padding-right: 10px;
  }
  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }
  .amount {
    color: ${({ isIncome }) => (isIncome === true ? BLUE : RED)};

  }
`;

interface TrasnsactionItemProps {
  transaction: Income | Expenditure;
}

const TransactionItem = ({ transaction }: TrasnsactionItemProps): JSX.Element => {
  const { category, account } = transaction;

  return (
    <TransactionItemWrapper>
      <ContentItemWrapper>
        <CategoryWrapper>
          <Category text={category.name} bgColor={category.color} />
        </CategoryWrapper>
      </ContentItemWrapper>
      <ContentItemWrapper>
        <div className="ellipsis">{isIncome(transaction) ? transaction.content : transaction.place}</div>
        <div className="ellipsis">{account.name}</div>
      </ContentItemWrapper>
      <ContentItemWrapper>
        <div className="ellipsis">{isIncome(transaction) ? transaction.memo : transaction.memo}</div>
      </ContentItemWrapper>
      <ContentItemWrapper isIncome={isIncome(transaction)}>
        <div className="amount">
          {isIncome(transaction)
            ? '+' + numberWithCommas(transaction.amount)
            : '-' + numberWithCommas(transaction.amount)}
          원
        </div>
      </ContentItemWrapper>
    </TransactionItemWrapper>
  );
};

export default TransactionItem;
