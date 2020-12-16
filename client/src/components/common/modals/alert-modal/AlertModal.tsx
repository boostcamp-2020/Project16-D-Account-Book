import React from 'react';
import styled from 'styled-components';
import BlueButton from '../../buttons/BlueButton';
import ModalBackground from '../modal-background/ModalBackground';
import useStore from '../../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import { ModalContentWrapper } from '../confirm-modal/ConfirmModal';

export const ModalContentText = styled.p`
  text-align: center;
  height: 10px;
`;

const ModalButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  margin: 0px 10px;
  margin-top: 10px;
  width: 30%;
`;

const AccountbookDeleteByAdminModal: React.FC = () => {
  const { alertStore } = useStore().rootStore.modalStore;

  const closeModal = () => {
    alertStore.setShow(false);
  };

  const onClick = () => {
    closeModal();
  };

  const makeText = () => {
    if (typeof alertStore.text === 'string') {
      return <ModalContentText>{alertStore.text}</ModalContentText>;
    } else {
      return alertStore.text.map((textElement, i) => <ModalContentText key={i}>{textElement}</ModalContentText>);
    }
  };

  return (
    <ModalBackground show={true} closeModal={closeModal}>
      <ModalContentWrapper>
        <div className="textbox">{makeText()}</div>
        <ModalButtonList>
          <ButtonWrapper>
            <BlueButton onClick={onClick}>확인</BlueButton>
          </ButtonWrapper>
        </ModalButtonList>
      </ModalContentWrapper>
    </ModalBackground>
  );
};

export default observer(AccountbookDeleteByAdminModal);
