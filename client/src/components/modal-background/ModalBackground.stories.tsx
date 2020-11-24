import React, { useState } from 'react';
import ModalBackground from './ModalBackground';

export default {
  title: 'modal-background/ModalBackground',
  component: ModalBackground,
};

export const ModalBackgroundDefault: React.FC = () => {
  return (
    <ModalBackground
      show={true}
      closeModal={(): void => {
        1 + 1;
      }}
    />
  );
};

export const ModalBackgroundExample: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = (): void => {
    setShow(false);
  };
  const openModal = (): void => {
    setShow(true);
  };
  return (
    <div>
      <button onClick={openModal}>모달을 열어봅시다</button>
      <ModalBackground show={show} closeModal={closeModal}>
        <div>안녕하세요</div>
      </ModalBackground>
    </div>
  );
};
