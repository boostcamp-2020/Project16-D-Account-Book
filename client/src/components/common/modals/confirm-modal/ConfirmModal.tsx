import React from 'react';
import styled from 'styled-components';
import GrayButton from '../../buttons/GrayButton';
import BlueButton from '../../buttons/BlueButton';
import ModalBackground from '../modal-background/ModalBackground';
import useStore from '../../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import color from '../../../../constants/color';

export const ModalContentWrapper = styled.div`
  background-color: ${color.MODAL_WHITE};
  width: 30%;
  padding: 10px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .textbox {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    min-height: 80px;
  }
`;

export const ModalContentText = styled.p`
  text-align: center;
  height: 10px;
`;

export const ModalButtonList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  margin: 0px 10px;
  margin-top: 10px;
`;

const AccountbookDeleteByAdminModal: React.FC = () => {
  const { confirmStore } = useStore().rootStore.modalStore;

  const closeModal = () => {
    confirmStore.setShow(false);
  };

  const onClick = () => {
    closeModal();
    if (confirmStore.callback) {
      confirmStore.callback();
    }
  };

  const makeText = () => {
    if (typeof confirmStore.text === 'string') {
      return <ModalContentText>{confirmStore.text}</ModalContentText>;
    } else {
      return confirmStore.text.map((textElement, i) => <ModalContentText key={i}>{textElement}</ModalContentText>);
    }
  };

  return (
    <ModalBackground show={true} closeModal={closeModal}>
      <ModalContentWrapper>
        <div className="textbox">{makeText()}</div>
        <ModalButtonList>
          <ButtonWrapper>
            <GrayButton onClick={closeModal}>취소</GrayButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <BlueButton onClick={onClick}>확인</BlueButton>
          </ButtonWrapper>
        </ModalButtonList>
      </ModalContentWrapper>
    </ModalBackground>
  );
};

export default observer(AccountbookDeleteByAdminModal);
