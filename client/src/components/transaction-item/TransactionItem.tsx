import React from 'react';
import Styled from 'styled-components';
import Category from '../category/Category';
import { numberWithCommas } from '../../utils/number';
import { RED, BLUE } from '../../constants/color';

const TransactionItemWrapper = Styled.div`
  display: flex;
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
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
  category: { name: string; color: string };
  income?: { id: number; amount: number; content: string; date: Date; memo: string };
  expenditure?: { id: number; amount: number; place: string; date: Date; memo: string };
  account: string;
  isIncome: boolean;
}

const TransactionItem = ({ category, income, expenditure, account, isIncome }: TrasnsactionItemProps): JSX.Element => {
  console.log(isIncome);
  return (
    <TransactionItemWrapper>
      <ContentItemWrapper>
        <CategoryWrapper>
          <Category text={category.name} bgColor={category.color} />
        </CategoryWrapper>
      </ContentItemWrapper>
      <ContentItemWrapper>
        <div className="ellipsis">{isIncome ? income?.content : expenditure?.place}</div>
        <div className="ellipsis">{account}</div>
      </ContentItemWrapper>
      <ContentItemWrapper>
        <div className="ellipsis">{isIncome ? income?.memo : expenditure?.memo}</div>
      </ContentItemWrapper>
      <ContentItemWrapper isIncome={isIncome}>
        <div className="amount">
          {isIncome ? numberWithCommas(income?.amount) : '-' + numberWithCommas(expenditure?.amount)}원
        </div>
      </ContentItemWrapper>
    </TransactionItemWrapper>
  );
};

export default TransactionItem;
