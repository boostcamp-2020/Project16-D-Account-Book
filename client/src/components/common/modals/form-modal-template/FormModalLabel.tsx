import React from 'react';
import styled from 'styled-components';

interface IFormModal {
  children: React.ReactNode;
}

const FormModalLabelWrapper = styled.div`
  width: 10vw;
  font-size: 1.2rem;
  padding-right: 10px;
`;

const FormModalLabel: React.FC<IFormModal> = ({ children }: IFormModal) => {
  return <FormModalLabelWrapper>{children}</FormModalLabelWrapper>;
};

export default FormModalLabel;
