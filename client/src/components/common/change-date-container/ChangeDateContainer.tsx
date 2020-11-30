import React from 'react';
import styled from 'styled-components';
import PreviousButton from '../back-button/PreviousButton';
import NextButton from '../next-button/NextButton';
import useStore from '../../../hook/use-store/useStore';
import { useObserver } from 'mobx-react';

const Container = styled.div`
  display: flex;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const PreviousButtonWrapper = styled.div`
  width: 32%;
  padding-top: 0.5rem;
  text-align: right;
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

const NextButtonWrapper = styled.div`
  width: 32%;
  padding-top: 0.5rem;
  text-align: left;
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
const DateWrapper = styled.div`
  width: 36%;
  display: flex;
  flex-direction: column;
  text-align: center;
  .month {
    font-size: 2rem;
  }
`;

const ChangeDateContainer: React.FC = () => {
  const { dateStore, transactionStore } = useStore();
  const onClickNextButton = () => {
    dateStore.moveToNextMonth();
    transactionStore.findTransactions(1, dateStore.startDate, dateStore.endDate);
  };

  const onClickPreviousButton = () => {
    dateStore.moveToPreviousMonth();
    transactionStore.findTransactions(1, dateStore.startDate, dateStore.endDate);
  };

  return (
    <Container>
      <PreviousButtonWrapper>
        <PreviousButton onClick={onClickPreviousButton} />
      </PreviousButtonWrapper>
      <DateWrapper>
        <div>{dateStore.startDate.getFullYear()}</div>
        <div className="month">{dateStore.startDate.getMonth() + 1}</div>
      </DateWrapper>
      <NextButtonWrapper>
        <NextButton onClick={onClickNextButton} />
      </NextButtonWrapper>
    </Container>
  );
};

export default ChangeDateContainer;
