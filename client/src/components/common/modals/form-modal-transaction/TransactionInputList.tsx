import React from 'react';
import styled from 'styled-components';
import { Options } from '../../../../types/options';
import InputText from '../../inputs/input-text/InputText';
import ModalClassify from '../../inputs/modal-classify/ModalClassify';
import SingleInputDropdown from '../../inputs/single-input-dropdown/SingleInputDropdown';
import InputDateTime from '../../inputs/input-datetime/InputDateTime';
interface ITransactionInputList {
  inputs: {
    classify: boolean;
    price?: number;
    categories: {
      placeholder: string;
      items: Options[];
    };
    accounts: {
      placeholder: string;
      items: Options[];
    };
    content?: string;
    date?: string;
    memo?: string;
  };

  changes: {
    classify?: {
      income: () => void;
      expenditure: () => void;
    };
    price?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    categories: (change: string) => void;
    accounts: (change: string) => void;
    content?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    date?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    memo?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  margin-top: 10px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ClassifyWrapper = styled.div`
  width: 45%;
`;

const TransactionInputList: React.FC<ITransactionInputList> = ({ inputs, changes }: ITransactionInputList) => {
  return (
    <InputListWrapper>
      <InputWrapper>
        <InputLabel>분류</InputLabel>
        <Inputs>
          <ClassifyWrapper>
            <ModalClassify value={'수입'} classify={inputs.classify} onChange={changes.classify?.income} />
          </ClassifyWrapper>
          <ClassifyWrapper>
            <ModalClassify value={'지출'} classify={!inputs.classify} onChange={changes.classify?.expenditure} />
          </ClassifyWrapper>
        </Inputs>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>금액</InputLabel>
        <Inputs>
          <InputText placeholder={'금액'} value={inputs.price} onChange={changes.price} />
        </Inputs>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>카테고리</InputLabel>
        <Inputs>
          <SingleInputDropdown placeholder={'카테고리'} items={inputs.categories.items} onChange={changes.categories} />
        </Inputs>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>결제수단</InputLabel>
        <Inputs>
          <SingleInputDropdown
            placeholder={'결제수단을 선택하세요'}
            items={inputs.accounts?.items}
            onChange={changes.accounts}
          />
        </Inputs>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>내용</InputLabel>
        <Inputs>
          <InputText placeholder={'날짜'} value={inputs.content} onChange={changes.content} />
        </Inputs>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>날짜</InputLabel>
        <Inputs>
          <InputDateTime value={inputs.date} onChange={changes.date} />
        </Inputs>
      </InputWrapper>

      <InputWrapper>
        <InputLabel>메모</InputLabel>
        <Inputs>
          <InputText placeholder={'메모'} value={inputs.memo} onChange={changes.memo} />
        </Inputs>
      </InputWrapper>
    </InputListWrapper>
  );
};

export default TransactionInputList;
