import React from 'react';
import styled from 'styled-components';
import InputText from '../input-text/InputText';
import PrevButton from '../../back-button/PreviousButton';
import NextButton from '../../next-button/NextButton';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SvgWrapper = styled.div`
  width: 3em;
  cursor: pointer;
`;

const InputTextWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0px 5px;
`;

const SmallInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  height: 3em;
  text-align: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans';
`;

interface IInputWithNextButton {
  clickPrev?: () => void;
  clickNext?: () => void;
  value?: string;
}

const InputWithNextButton: React.FC<IInputWithNextButton> = ({ clickPrev, clickNext, value }: IInputWithNextButton) => {
  return (
    <InputWrapper>
      <SvgWrapper onClick={clickPrev}>
        <PrevButton />
      </SvgWrapper>
      <InputTextWrapper>
        <SmallInput disabled value={value} />
      </InputTextWrapper>
      <SvgWrapper onClick={clickNext}>
        <NextButton />
      </SvgWrapper>
    </InputWrapper>
  );
};

export default InputWithNextButton;
