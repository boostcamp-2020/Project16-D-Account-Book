import React from 'react';
import styled from 'styled-components';
import ModalBackButton from '../../back-button/ModalBackButton';
import SMSIcon from './SMSIcon';
import { DEEP_GRAY } from '../../../../constants/color';

interface IFormModalHeaderProps {
  closeModal?: () => void;
  clickSMS?: () => void;
  clickRed?: () => void;
  clickBlue?: () => void;
  modalName?: string;
  blueName?: string;
  redName?: string;
  disabledName?: string;
  sms?: boolean;
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
  font-size: 1.3em;
  margin-top: 0%;
  margin-bottom: 0%;
  margin-left: 10px;
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

const DisabledButton = styled.p`
  color: ${DEEP_GRAY};
  margin-top: 0%;
  margin-bottom: 0%;
`;

const FormModalHeader: React.FC<IFormModalHeaderProps> = ({
  closeModal,
  clickSMS,
  clickRed,
  clickBlue,
  modalName,
  blueName,
  redName,
  disabledName,
  sms,
}: IFormModalHeaderProps) => {
  return (
    <Header>
      <CloseModalButtonWrapper>
        <ModalBackButton onClick={closeModal} />
      </CloseModalButtonWrapper>
      <ModalName>{modalName}</ModalName>
      <Right />
      {sms && <SMSIcon />}
      {redName && <RedButton onClick={clickRed}>{redName}</RedButton>}
      {blueName && <BlueButton onClick={clickBlue}>{blueName}</BlueButton>}
      {disabledName && <DisabledButton>{disabledName}</DisabledButton>}
    </Header>
  );
};

export default FormModalHeader;
