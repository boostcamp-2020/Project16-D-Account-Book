import React from 'react';
import styled from 'styled-components';
import GrayButton from '../../buttons/GrayButton';
import RedButton from '../../buttons/RedButton';
import ModalBackground from '../modal-background/ModalBackground';
import useStore from '../../../../hook/use-store/useStore';
import { observer } from 'mobx-react';

const ModalContentWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 30%;
  padding: 10px 20px;
`;

const ModalContentText = styled.p`
  text-align: center;
`;

const ModalButtonList = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  margin: 0px 10px;
`;

const AccountbookDeleteByAdminModal: React.FC = () => {
  const { deleteAccountbookByAdminStore } = useStore().rootStore.modalStore;

  const closeModal = () => {
    deleteAccountbookByAdminStore.setShow(false);
  };

  return (
    <ModalBackground show={true} closeModal={closeModal}>
      <ModalContentWrapper>
        <ModalContentText>당신은 관리자입니다.</ModalContentText>
        <ModalContentText>관리자가 가계부를 삭제하길 희망하는 경우</ModalContentText>
        <ModalContentText>다른 구성원을 관리자로 지정해줘야합니다.</ModalContentText>
        <ModalContentText>정말 삭제하시겠습니까?</ModalContentText>
        <ModalButtonList>
          <ButtonWrapper>
            <GrayButton onClick={closeModal}>취소</GrayButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <RedButton onClick={undefined}>삭제</RedButton>
          </ButtonWrapper>
        </ModalButtonList>
      </ModalContentWrapper>
    </ModalBackground>
  );
};

export default observer(AccountbookDeleteByAdminModal);
