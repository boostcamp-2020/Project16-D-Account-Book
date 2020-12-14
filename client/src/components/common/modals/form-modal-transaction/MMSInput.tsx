import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../../../../constants/color';
import { InputListWrapper, InputWrapper } from './TransactionInputList';
import { FormActionType, FormChangeAction } from '../../../../types/TransactionForm';
import { getDateString, findAccountByName } from '../../../../utils/mms/mms';
import transactionService from '../../../../services/transaction';
import useStore from '../../../../hook/use-store/useStore';
const SmallArea = styled.div`
  width: 70%;
  margin: 10px auto;
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 400px;
  margin: 10px auto;
  resize: none;
  border: 1px solid lightgray;
`;

const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
  justify-content: space-between;
`;

interface IButtons {
  backgroundColor: string;
}
const Buttons = styled.button<IButtons>`
  width: 40%;
  padding: 10px 10px;
  border-radius: 50px;
  border: 0px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
`;

interface IMMSInput {
  dispatch: React.Dispatch<FormChangeAction>;
  MMSToggle: () => void;
}

const MMSInput: React.FC<IMMSInput> = ({ dispatch, MMSToggle }: IMMSInput) => {
  const [mmsText, setMMSText] = useState('');
  const { accountStore } = useStore().rootStore;
  const textChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMMSText(e.target.value);
  };
  const clickConfirm = () => {
    const mmsParsing = async () => {
      //
      const response = await transactionService.parsingMMS(mmsText);
      if (response.transactionType === '거절') {
        alert('처리할 수 없는 결제 내역입니다.');
        return;
      }
      const selectedCategory = findAccountByName(response.cardname, accountStore.accounts);
      if (selectedCategory === undefined) {
        alert('카드 이름을 찾을 수 없습니다. 직접 입력해주세요!');
      } else {
        dispatch({
          type: FormActionType.ACCOUNTS_CHANGE,
          data: selectedCategory.id + '',
        });
      }

      dispatch({
        type: FormActionType.CLASSIFY_CHANGE,
        data: response.isDeposit,
      });

      dispatch({
        type: FormActionType.PRICE_CHANGE,
        data: response.amount,
      });

      dispatch({
        type: FormActionType.DATE_CHANGE,
        data: getDateString(response.date, response.time),
      });
      MMSToggle();
    };
    mmsParsing();
  };
  return (
    <InputListWrapper>
      <InputWrapper>
        <SmallArea>
          <TextBox placeholder="메시지를 입력하세요" value={mmsText} onChange={textChange} />
          <ButtonLayout>
            <Buttons backgroundColor={color.MODAL_RED} onClick={MMSToggle}>
              취소
            </Buttons>
            <Buttons backgroundColor={color.MINT} onClick={clickConfirm}>
              변환
            </Buttons>
          </ButtonLayout>
        </SmallArea>
      </InputWrapper>
    </InputListWrapper>
  );
};

export default MMSInput;
