import React from 'react';
import styled from 'styled-components';
import { numberWithCommas } from '../../../utils/number';
import { BLUE, RED } from '../../../constants/color';

const AmountWrapper = styled.div<{ text: string }>`
  width: 100%;
  display: flex;
  color: ${({ text }) => (text == '지출' ? RED : BLUE)};
  .text {
    width: 20%;
  }
  .amount {
    width: 80%;
    text-align: right;
  }
`;

interface Props {
  text: string;
  amount: number;
}

const Amount: React.FC<Props> = ({ text, amount }: Props) => {
  return (
    <AmountWrapper text={text}>
      <div className="text">{text}</div>
      <div className="amount">{numberWithCommas(amount)}원</div>
    </AmountWrapper>
  );
};

export default Amount;
