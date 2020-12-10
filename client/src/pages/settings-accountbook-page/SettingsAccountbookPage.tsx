import React, { useState } from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import Preview from '../../components/common/preview/Preview';
import InputText from '../../components/common/inputs/input-text/InputText';
import SingleInputDropDown from '../../components/common/inputs/single-input-dropdown/SingleInputDropdown';
import GMT from '../../__dummy-data__/components/settings/gmtData';
import InputRadio from '../../components/common/inputs/input-radio/InputRadio';
import { DODGER_BLUE } from '../../constants/color';
import { startDateChecker } from '../../types/inputRadio';
const SettingsAccountbookPageWrapper = styled.div`
  display: flex;
`;

const SettingsBody = styled.div`
  position: absolute;
  top: 0%;
  left: 25%;
  padding: 50px 50px;
`;

const PreviewWrapper = styled.div`
  width: 700px;
`;

const SettingsItemWrapper = styled.div`
  width: 30vw;
  margin-top: 50px;
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

interface ConfirmButtonProps {
  onClick?: () => void;
}

const ConfirmButton = styled.p<ConfirmButtonProps>`
  position: fixed;
  top: 0%;
  right: 5%;
  cursor: pointer;
  color: ${DODGER_BLUE};
`;

const SettingsAccountbookPage = (): JSX.Element => {
  const [inputColor, setInputColor] = useState<string>('black');
  const [title, setTitle] = useState<string>('가계부 1');
  const [description, setDescription] = useState<string>('부스트캠프 커넥트 재단 가계부');
  const { name, left, right } = startDateChecker;
  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <SettingsAccountbookPageWrapper>
      <SettingsSidebar currentpage={'accountbook'} />
      <SettingsBody>
        <ConfirmButton>완료</ConfirmButton>
        <PreviewWrapper>
          <Preview title={title} description={description} color={inputColor} onChange={onChange} />
        </PreviewWrapper>
        <SettingsItemWrapper>
          <Label>가계부 별칭</Label>
          <InputText
            maxLength={15}
            placeholder={'최대 15자의 가계부 별칭을 작성해주세요.'}
            value={title}
            onChange={onChangeTitle}
          />
        </SettingsItemWrapper>
        <SettingsItemWrapper>
          <Label>가계부 설명</Label>
          <InputText
            maxLength={30}
            placeholder={'가계부에 대한 설명을 기재해주세요.'}
            value={description}
            onChange={onChangeDescription}
          />
        </SettingsItemWrapper>
        <SettingsItemWrapper>
          <Label>한 주의 시작 요일 설정</Label>
          <InputRadio name={name} left={left} right={right} />
        </SettingsItemWrapper>
        <SettingsItemWrapper>
          <Label>GMT 설정</Label>
          <SingleInputDropDown items={GMT} placeholder={'GMT 설정'} />
        </SettingsItemWrapper>
      </SettingsBody>
    </SettingsAccountbookPageWrapper>
  );
};

export default SettingsAccountbookPage;
