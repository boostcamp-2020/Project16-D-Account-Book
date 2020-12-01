import React from 'react';
import styled from 'styled-components';
import ModalBackButton from '../../back-button/ModalBackButton';

interface IFormModalHeaderProps {
  closeModal?: () => void;
  clickMMS?: () => void;
  clickRed?: () => void;
  clickBlue?: () => void;
  modalName?: string;
  blueName?: string;
  redName?: string;
  mms?: boolean;
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CloseModalButtonWrapper = styled.div`
  cursor: pointer;
  width: 1.3em;
  margin-right: 1em;
`;

const Right = styled.p`
  margin-left: auto;
  margin-top: 0%;
  margin-bottom: 0%;
`;

const ModalName = styled.p`
  cursor: pointer;
  font-size: 1.3em;
  margin-top: 0%;
  margin-bottom: 0%;
`;

const RedButton = styled.p`
  cursor: pointer;
  color: tomato;
  margin-right: 1em;
  margin-top: 0%;
  margin-bottom: 0%;
`;

const BlueButton = styled.p`
  cursor: pointer;
  color: dodgerblue;
  margin-top: 0%;
  margin-bottom: 0%;
`;

const FormModalHeader: React.FC<IFormModalHeaderProps> = ({
  closeModal,
  clickMMS,
  clickRed,
  clickBlue,
  modalName,
  blueName,
  redName,
  mms,
}: IFormModalHeaderProps) => {
  return (
    <Header>
      <CloseModalButtonWrapper>
        <ModalBackButton onClick={closeModal} />
      </CloseModalButtonWrapper>
      <ModalName>{modalName}</ModalName>
      <Right />
      {mms}
      {redName && <RedButton onClick={clickRed}>{redName}</RedButton>}
      {blueName && <BlueButton onClick={clickBlue}>{blueName}</BlueButton>}
    </Header>
  );
};

export default FormModalHeader;
