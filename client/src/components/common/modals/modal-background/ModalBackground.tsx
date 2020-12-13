import React, { useRef } from 'react';
import useClickMe from '../../../../hook/use-click-me/useClickMe';
import styled from 'styled-components';

interface ModalBackgroundProps {
  children?: React.ReactNode;
  show?: boolean;
  closeModal?: () => void;
  position?: string;
}

interface ModalWrapperProps {
  show?: boolean;
}

interface ChildrenWrapperProps {
  position?: string;
}

const Background = styled.div<ModalWrapperProps>`
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  border: 1px solid black;
`;

const ModalBackgroundWrapper = styled.div<ModalWrapperProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  z-index: 100;
  position: ${({ position }) => (position ? position : 'fixed')};
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const ModalBackground: React.FC<ModalBackgroundProps> = ({
  children,
  show,
  closeModal,
  position,
}: ModalBackgroundProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  if (closeModal !== undefined) {
    useClickMe(modalRef, closeModal);
  }
  return (
    <ModalBackgroundWrapper show={show}>
      <Background ref={modalRef} />
      <ChildrenWrapper position={position}>{children}</ChildrenWrapper>
    </ModalBackgroundWrapper>
  );
};

export default ModalBackground;
