import React from 'react';
import styled from 'styled-components';

interface IFormModal {
  children: React.ReactNode;
}

const FormModalItemWrapper = styled.div`
  width: 30vw;
  padding: 3vh 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormModalItem: React.FC<IFormModal> = ({ children }: IFormModal) => {
  return <FormModalItemWrapper>{children}</FormModalItemWrapper>;
};

export default FormModalItem;
