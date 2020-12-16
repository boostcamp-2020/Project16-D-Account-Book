import React, { useState } from 'react';
import styled from 'styled-components';
import ModalBackground from '../modal-background/ModalBackground';
import { MODAL_WHITE } from '../../../../constants/color';
import useStore from '../../../../hook/use-store/useStore';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import Preview from '../../preview/Preview';
import InputText from '../../inputs/input-text/InputText';

const FormModalWrapper = styled.div`
  background-color: ${MODAL_WHITE};
  width: 55%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 400px;
`;

const ModalBody = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-bottom: 20px;
`;

const PreviewWrapper = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  width: 80%;
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  width: 80%;
`;

const FormModalCreateAccountbook = (): JSX.Element => {
  const { createAccountbookFormStore } = useStore().rootStore.modalStore;
  const { accountbookStore } = useStore().rootStore;
  const [inputColor, setInputColor] = useState<string>('#000000');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onChangeColor = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const onClickCreate = () => {
    if (!title) {
      alert('가계부 이름을 입력해주세요.');
      return;
    }

    accountbookStore.createAccountbook({ title, color: inputColor, description });
    createAccountbookFormStore.setShow(false);
  };

  return (
    <ModalBackground show={true} closeModal={() => createAccountbookFormStore.setShow(false)}>
      <FormModalWrapper>
        <FormModalHeader
          modalName={'가계부 생성'}
          blueName={'생성'}
          clickBlue={onClickCreate}
          closeModal={() => createAccountbookFormStore.setShow(false)}
        />
        <ModalBody>
          <PreviewWrapper>
            <Preview title={title} description={description} color={inputColor} onChange={onChangeColor} />
          </PreviewWrapper>
          <ContentWrapper>
            <Label>가계부 별칭</Label>
            <InputText
              maxLength={15}
              placeholder={'최대 15자의 가계부 별칭을 작성해주세요.'}
              value={title}
              onChange={onChangeTitle}
            />
          </ContentWrapper>
          <ContentWrapper>
            <Label>가계부 설명</Label>
            <InputText
              maxLength={30}
              placeholder={'가계부에 대한 설명을 기재해주세요.'}
              value={description}
              onChange={onChangeDescription}
            />
          </ContentWrapper>
        </ModalBody>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default FormModalCreateAccountbook;
