import React, { useRef, useState } from 'react';
import useClickMe from '../../../../hook/use-click-me/useClickMe';
import styled from 'styled-components';
interface ModalBackgroundProps {
  children?: React.ReactNode;
  show: boolean;
  closeModal?: () => void;
}

interface ModalWrapperProps {
  show: boolean;
}

const ModalBackgroundWrapper = styled.div<ModalWrapperProps>`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const ModalBackground: React.FC<ModalBackgroundProps> = ({ children, show, closeModal }: ModalBackgroundProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  if (closeModal !== undefined) {
    useClickMe(modalRef, closeModal);
  }
  return (
    <ModalBackgroundWrapper ref={modalRef} show={show}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </ModalBackgroundWrapper>
  );
};

export default ModalBackground;
