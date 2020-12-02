import React from 'react';
import FormFilter from './FormFilter';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import { MODAL_WHITE } from '../../../../constants/color';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import { inputs, changes } from '../../../../__dummy-data__/components/modal/modalFilter';

const FormModalFilter = (): JSX.Element => {
  return (
    <ModalBackground show={true}>
      <FormModalWrapper>
        <FormModalHeader modalName={'필터'} redName={'초기화'} blueName={'적용'} />
        <FormFilter inputs={inputs} changes={changes} />
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default FormModalFilter;
