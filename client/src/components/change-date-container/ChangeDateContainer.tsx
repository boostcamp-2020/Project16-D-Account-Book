import React from 'react';
import styled from 'styled-components';
import PreviousButton from '../back-button/PreviousButton';
import NextButton from '../next-button/NextButton';

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

const ChangeDateContainer: React.FC = () => {
  return (
    <Container>
      <PreviousButtonWrapper>
        <PreviousButton />
      </PreviousButtonWrapper>
      <DateWrapper>
        <div>2020</div>
        <div className="month">11</div>
      </DateWrapper>
      <NextButtonWrapper>
        <NextButton />
      </NextButtonWrapper>
    </Container>
  );
};

export default ChangeDateContainer;
