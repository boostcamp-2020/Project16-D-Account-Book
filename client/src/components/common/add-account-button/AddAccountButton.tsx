import React from 'react';
import useStore from '../../../hook/use-store/useStore';
import styled from 'styled-components';
import PlusInCircle from '../plus-in-circle/PlusInCircle';
import { GRAY } from '../../../constants/color';

const AccountWrapper = styled.div`
  width: 17vw;
  height: 10vw;
  background-color: ${GRAY};
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 2px 3px 7px gray;
  }
`;

const PlusInCircleWrapper = styled.div`
  margin: auto 0;
`;

const AddAccountButton: React.FC = () => {
  const { rootStore } = useStore();
  const createAccountForm = rootStore.modalStore.createAccountFormStore;

  const openCreateAccountForm = (): void => {
    createAccountForm.toggleShow();
  };

  return (
    <AccountWrapper onClick={openCreateAccountForm}>
      <PlusInCircleWrapper>
        <PlusInCircle sideLength={'3rem'} />
      </PlusInCircleWrapper>
    </AccountWrapper>
  );
};

export default AddAccountButton;
