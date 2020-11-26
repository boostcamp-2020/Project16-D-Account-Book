import React from 'react';
import styled from 'styled-components';
import PreviousButton from '../back-button/PreviousButton';
import NextButton from '../next-button/NextButton';
import { isEndOfYear, isStartOfYear } from '../../utils/date';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const PreviousButtonWrapper = styled.div`
  width: 32%;
  padding-top: 0.5rem;
  text-align right;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const NextButtonWrapper = styled.div`
  width: 32%;
  padding-top: 0.5rem;
  text-align left;
  svg {
    width: 2rem;
    height: 2rem;
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

interface Props {
  year: number;
  month: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
}

const ChangeDateContainer: React.FC<Props> = ({ year, month, setYear, setMonth }: Props) => {
  const onClickNextButton = () => {
    if (isEndOfYear(month)) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const onClickPreviousButton = () => {
    if (isStartOfYear(month)) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <Container>
      <PreviousButtonWrapper>
        <PreviousButton onClick={onClickPreviousButton} />
      </PreviousButtonWrapper>
      <DateWrapper>
        <div>{year}</div>
        <div className="month">{month}</div>
      </DateWrapper>
      <NextButtonWrapper>
        <NextButton onClick={onClickNextButton} />
      </NextButtonWrapper>
    </Container>
  );
};

export default ChangeDateContainer;
