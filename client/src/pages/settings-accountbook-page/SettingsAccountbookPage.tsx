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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingsAccountbookPageWrapper = styled.div`
  font-family: 'Spoqa Han Sans';
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

const Label = styled.div<{ color?: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ color }) => color};
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

  const accountColor = accountbookStore.accountbook?.color || '#000000';
  const accountTitle = accountbookStore.accountbook?.title || '';
  const accountDescription = accountbookStore.accountbook?.description || '';

  const [inputColor, setInputColor] = useState<string>(accountColor);
  const [title, setTitle] = useState<string>(accountTitle);
  const [description, setDescription] = useState<string>(accountDescription);

  useEffect(() => {
    const setCurrentAccountbook = () => {
      const [accountbook] = accountbookStore.accountbooks.filter(
        (accountbook) => accountbook.accountbookId === accountbookId,
      );
      accountbookStore.updateAccountbookSettings(accountbook);
      setTitle((accountbookStore.accountbook as Accountbook).title);
      setDescription((accountbookStore.accountbook as Accountbook).description);
      setInputColor((accountbookStore.accountbook as Accountbook).color);
    };

    const loadAccountbooks = async () => {
      await accountbookStore.updateAccountbooks();
      setCurrentAccountbook();
      accountbookStore.setIsLoading(false);
    };

    if (accountbookStore.accountbooks.length === 0) {
      loadAccountbooks();
      return;
    }

    setCurrentAccountbook();
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

  const convertToAccountbook = (title, inputColor, description, accountbookId) => {
    return {
      id: (accountbookStore.accountbook as Accountbook).id,
      title: title,
      color: inputColor,
      description: description,
      accountbookId,
    };
  };
  const notify = () =>
    toast('✅ㅤ가계부 설정이 변경되었습니다.', { position: toast.POSITION.BOTTOM_CENTER, hideProgressBar: true });

  const updateAccountbook = (): void => {
    const accountbook = convertToAccountbook(title, inputColor, description, accountbookId);
    accountbookStore.updateAccountbook(accountbook);
    notify();
  };

  return (
    <SettingsAccountbookPageWrapper>
      <ToastContainer pauseOnFocusLoss={false} />
      <SettingsSidebar currentpage={'accountbook'} />
      {accountbookStore.isLoading ? (
        <Spinner />
      ) : (
        <SettingsBody>
          <ConfirmButton onClick={updateAccountbook}>완료</ConfirmButton>
          <SettingsItemWrapper>
            <PreviewWrapper>
              <Preview title={title} description={description} color={inputColor} onChange={onChange} />
            </PreviewWrapper>
          </SettingsItemWrapper>
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
          ) : (
            <SettingsItemWrapper>
              <Label color={'#e4e4e4'}>가계부 별칭</Label>
              <InputText
                maxLength={15}
                placeholder={'최대 15자의 가계부 별칭을 작성해주세요.'}
                value={title}
                onChange={onChangeTitle}
                disabled={true}
              />
            </SettingsItemWrapper>
          )}
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
