import React from 'react';
import styled from 'styled-components';

interface ModalClassify {
  value: string;
  onChange?: () => void;
  classify: boolean;
}

interface WrapperProps {
  classify: boolean;
}
const ModalClassifyWrapper = styled.div<WrapperProps>`
  border-radius: 30px;
  padding: 5px 20px;
  margin: 0px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.classify ? '#ffffff' : '#52ACE8')};
  color: ${(props) => (props.classify ? 'black' : 'white')};
`;

const ModalClassify: React.FC<ModalClassify> = ({ value, onChange, classify }: ModalClassify) => {
  return (
    <ModalClassifyWrapper classify={classify} onClick={onChange}>
      {value}
    </ModalClassifyWrapper>
  );
};

export default ModalClassify;
