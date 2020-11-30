import React from 'react';
import styled from 'styled-components';
import { Options } from '../../../../types/options';
import InputText from '../../inputs/input-text/InputText';

interface ITransactionInputList {
  inputs: {
    classify?: boolean;
    price?: number;
    categories?: {
      placeholder: string;
      items: Options;
    };
    accounts?: {
      placeholder: string;
      items: Options;
    };
    content?: string;
    date?: string;
    memo?: string;
  };

  changes: {
    classify?: (change: boolean) => void;
    price?: (change: number | string) => void;
    categories?: (change: string) => void;
    accounts?: (change: string) => void;
    content?: (change: string) => void;
    date?: (change: string) => void;
    memo?: (change: string) => void;
  };
}

const InputListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 70%;
  padding: 0%;
  margin: 0%;
  display: flex;
  align-items: center;
`;

const InputLabel = styled.div`
  width: 30%;
  padding: 0%;
  margin: 0%;
`;

const Inputs = styled.div`
  flex: 1;
  padding: 0%;
  margin: 0%;
`;

const TransactionInputList: React.FC<ITransactionInputList> = ({ inputs, changes }: ITransactionInputList) => {
  return (
    <InputListWrapper>
      <InputWrapper>
        <InputLabel>금액</InputLabel>
        <Inputs>
          <InputText placeholder={'금액'} value={inputs.price} onChange={changes.price} />
        </Inputs>
      </InputWrapper>
    </InputListWrapper>
  );
};

export default TransactionInputList;
