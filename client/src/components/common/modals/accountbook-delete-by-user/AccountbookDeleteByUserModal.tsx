import React from 'react';
import styled from 'styled-components';
import GrayButton from '../../buttons/GrayButton';
import RedButton from '../../buttons/RedButton';
import ModalBackground from '../modal-background/ModalBackground';
import useStore from '../../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import {
  ModalContentWrapper,
  ModalContentText,
  ModalButtonList,
  ButtonWrapper,
} from '../accountbook-delete-by-admin/AccountbookDeleteByAdminModal';

const AccountbookDeleteByUserModal: React.FC = () => {
  const { deleteAccountbookByUserStore } = useStore().rootStore.modalStore;

  const closeModal = () => {
    deleteAccountbookByUserStore.setShow(false);
  };

  const onClickDelete = () => {
    deleteAccountbookByUserStore.deleteAccountbook();
    closeModal();
  };

  return (
    <ModalBackground show={true} closeModal={closeModal}>
      <ModalContentWrapper>
        <ModalContentText>선택한 가계부를 삭제하시겠습니까?</ModalContentText>
        <br />
        <ModalButtonList>
          <ButtonWrapper>
            <GrayButton onClick={closeModal}>취소</GrayButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <RedButton onClick={onClickDelete}>삭제</RedButton>
          </ButtonWrapper>
        </ModalButtonList>
      </ModalContentWrapper>
    </ModalBackground>
  );
};

export default observer(AccountbookDeleteByUserModal);
