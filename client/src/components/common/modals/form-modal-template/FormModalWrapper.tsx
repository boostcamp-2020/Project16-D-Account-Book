import React from 'react';
import { MODAL_WHITE } from '../../../../constants/color';
import styled from 'styled-components';

interface IFormModal {
  children: React.ReactNode;
}

const FormModalWrapper = styled.div`
  background-color: ${MODAL_WHITE};
  width: 80%;
  padding: 20px;
`;

const FormModal: React.FC<IFormModal> = ({ children }: IFormModal) => {
  return <FormModalWrapper>{children}</FormModalWrapper>;
};

export default FormModal;
