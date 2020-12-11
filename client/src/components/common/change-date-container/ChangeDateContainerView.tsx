import React from 'react';
import PreviousButton from '../back-button/PreviousButton';
import NextButton from '../next-button/NextButton';
import { Container, PreviousButtonWrapper, NextButtonWrapper, DateWrapper } from './ChangeDateContainer';

interface IChangeDateContainerView {
  prevDate: Date;
  prevClick: () => void;
  nextClick: () => void;
}

const ChangeDateContainerView: React.FC<IChangeDateContainerView> = ({
  prevDate,
  prevClick,
  nextClick,
}: IChangeDateContainerView) => {
  return (
    <Container>
      <PreviousButtonWrapper>
        <PreviousButton onClick={prevClick} />
      </PreviousButtonWrapper>
      <DateWrapper>
        <div>{prevDate.getFullYear()}</div>
        <div className="month">{prevDate.getMonth() + 1}</div>
      </DateWrapper>
      <NextButtonWrapper>
        <NextButton onClick={nextClick} />
      </NextButtonWrapper>
    </Container>
  );
};

export default ChangeDateContainerView;
