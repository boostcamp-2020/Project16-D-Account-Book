import React from 'react';
import styled from 'styled-components';
import Category from '../../category/Category';
import { numberWithCommas } from '../../../../utils/number';
import { RED, BLUE, LIGHT_GRAY } from '../../../../constants/color';
import Income, { isIncome } from '../../../../types/income';
import Expenditure from '../../../../types/expenditure';
import useStore from '../../../../hook/use-store/useStore';

const TransactionItemWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: ${LIGHT_GRAY};
    border-radius: 10px;
  }
`;

const CategoryWrapper = styled.div`
  width: 100%;
`;

const ContentItemWrapper = styled.div<{ isIncome?: boolean }>`
  display: flex;
  text-align: center;
  justify-content: center;
  &:nth-child(1) {
    width: 12%;
    justify-content: flex-start;
    @media only screen and (max-width: 768px) {
      width: 20%;
      padding-left: 10px;
    }
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
    @media only screen and (max-width: 768px) {
      width: 42%;
      padding-left: 10px;
    }
  }
  &:nth-child(4) {
    flex-direction: column;
    font-size: 20px;
    width: 16%;
    text-align: right;
    padding-right: 10px;
    @media only screen and (max-width: 768px) {
      width: 22%;
    }
  }
  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }
  .amount {
    color: ${({ isIncome }) => (isIncome === true ? BLUE : RED)};
    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

interface TrasnsactionItemProps {
  transaction: Income | Expenditure;
}

const TransactionItem = ({ transaction }: TrasnsactionItemProps): JSX.Element => {
  const { category, account } = transaction;
  const { rootStore } = useStore();
  const modalUpdateForm = rootStore.modalStore.updateTransactionFormStore;

  const clickItem = (e): void => {
    e.stopPropagation();
    modalUpdateForm.setShowTrue();
    modalUpdateForm.loadIncomeExpenditure(transaction);
  };

  return (
    <TransactionItemWrapper onClickCapture={clickItem}>
      <ContentItemWrapper>
        <CategoryWrapper>
          <Category id={category.id} name={category.name} color={category.color} />
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
