import React from 'react';
import styled from 'styled-components';
import ModalBackground from '../modal-background/ModalBackground';
import { MODAL_WHITE } from '../../../../constants/color';
import useStore from '../../../../hook/use-store/useStore';

const FormModalWrapper = styled.div`
  background-color: ${MODAL_WHITE};
  width: 40%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 360px;
  transform: translate(-50%, -50%);
`;

const FormModalCreateAccountbook = (): JSX.Element => {
  const { createAccountbookFormStore } = useStore().rootStore.modalStore;
  return (
    <ModalBackground show={true} closeModal={() => createAccountbookFormStore.setShow(false)}>
      <FormModalWrapper></FormModalWrapper>
    </ModalBackground>
  );
};

export default FormModalCreateAccountbook;
