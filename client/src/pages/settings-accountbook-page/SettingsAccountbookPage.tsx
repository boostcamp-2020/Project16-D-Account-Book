import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import Preview from '../../components/common/preview/Preview';
import InputText from '../../components/common/inputs/input-text/InputText';
import { DODGER_BLUE } from '../../constants/color';
import useStore from '../../hook/use-store/useStore';
import useGetParam from '../../hook/use-get-param/useGetParam';
import { observer } from 'mobx-react';
import Accountbook from '../../types/accountbook';
import Spinner from '../../components/common/spinner/Spinner';

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

const SettingsAccountbookPage: React.FC = () => {
  const accountbookId = useGetParam();
  const { userStore, accountbookStore } = useStore().rootStore;

  const isAdmin = userStore.isAdmin(accountbookId);

  const [inputColor, setInputColor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    accountbookStore.isLoading = true;
    const loadAccountbooks = async () => {
      await accountbookStore.updateAccountbooks();
      const [accountbook] = accountbookStore.accountbooks.filter(
        (accountbook) => accountbook.accountbookId === accountbookId,
      );
      accountbookStore.updateAccountbookSettings(accountbook);
      setTitle((accountbookStore.accountbook as Accountbook).title);
      setDescription((accountbookStore.accountbook as Accountbook).description);
      setInputColor((accountbookStore.accountbook as Accountbook).color);
    };
    loadAccountbooks();
  }, []);

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
      {accountbookStore.isLoading ? (
        <Spinner />
      ) : (
        <SettingsBody>
          <ConfirmButton>완료</ConfirmButton>
          <PreviewWrapper>
            <Preview title={title} description={description} color={inputColor} onChange={onChange} />
          </PreviewWrapper>
          {isAdmin ? (
            <SettingsItemWrapper>
              <Label>가계부 별칭</Label>
              <InputText
                maxLength={15}
                placeholder={'최대 15자의 가계부 별칭을 작성해주세요.'}
                value={title}
                onChange={onChangeTitle}
              />
            </SettingsItemWrapper>
          ) : null}
          <SettingsItemWrapper>
            <Label>가계부 설명</Label>
            <InputText
              maxLength={30}
              placeholder={'가계부에 대한 설명을 기재해주세요.'}
              value={description}
              onChange={onChangeDescription}
            />
          </SettingsItemWrapper>
        </SettingsBody>
      )}
    </SettingsAccountbookPageWrapper>
  );
};

export default observer(SettingsAccountbookPage);
