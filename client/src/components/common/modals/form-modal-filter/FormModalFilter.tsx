import React from 'react';
import FormFilter from './FormFilter';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import { inputs, changes } from '../../../../__dummy-data__/components/modal/modalFilter';
import useStore from '../../../../hook/use-store/useStore';
import { useObserver } from 'mobx-react';

const FormModalFilter = (): JSX.Element => {
  const { modalStore } = useStore().rootStore;

  const closeModal = () => {
    modalStore.formFilterStore.setShow(false);
  };

  return useObserver(() => (
    <>
      {modalStore.formFilterStore.show ? (
        <ModalBackground show={true} closeModal={closeModal}>
          <FormModalWrapper>
            <FormModalHeader modalName={'필터'} redName={'초기화'} blueName={'적용'} />
            <FormFilter inputs={inputs} changes={changes} />
          </FormModalWrapper>
        </ModalBackground>
      ) : (
        <></>
      )}
    </>
  ));
};

export default FormModalFilter;
