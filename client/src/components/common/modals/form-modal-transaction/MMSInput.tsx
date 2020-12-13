import React from 'react';
import styled from 'styled-components';
import { InputListWrapper, InputWrapper } from './TransactionInputList';

const SmallArea = styled.div`
  width: 70%;
  margin: 10px auto;
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 200px;
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
const MMSInput: React.FC = () => {
  return (
    <InputListWrapper>
      <InputWrapper>
        <SmallArea>
          <TextBox placeholder="메시지를 입력하세요" />
          <ButtonLayout>
            <div>버튼1</div>
            <div>버튼2</div>
          </ButtonLayout>
        </SmallArea>
      </InputWrapper>
    </InputListWrapper>
  );
};

export default MMSInput;
