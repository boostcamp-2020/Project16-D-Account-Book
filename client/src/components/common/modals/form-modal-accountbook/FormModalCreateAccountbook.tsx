import React, { useState } from 'react';
import styled from 'styled-components';
import ModalBackground from '../modal-background/ModalBackground';
import { MODAL_WHITE } from '../../../../constants/color';
import useStore from '../../../../hook/use-store/useStore';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import Preview from '../../preview/Preview';

const FormModalWrapper = styled.div`
  background-color: ${MODAL_WHITE};
  width: 40%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PreviewWrapper = styled.div`
  margin-top: 1rem;
  width: 80%;
`;

const FormModalCreateAccountbook = (): JSX.Element => {
  const { createAccountbookFormStore } = useStore().rootStore.modalStore;
  const [inputColor, setInputColor] = useState<string>('black');
  const [title, setTitle] = useState<string>('가계부');
  const [description, setDescription] = useState<string>('가계부에 대한 설명을 입력하세요.');

  const onChangeColor = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return (
    <ModalBackground show={true} closeModal={() => createAccountbookFormStore.setShow(false)}>
      <FormModalWrapper>
        <FormModalHeader
          modalName={'가계부 생성'}
          blueName={'생성'}
          clickBlue={undefined}
          closeModal={() => createAccountbookFormStore.setShow(false)}
        />
        <PreviewWrapper>
          <Preview title={title} description={description} color={inputColor} onChange={onChangeColor} />
        </PreviewWrapper>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default FormModalCreateAccountbook;
