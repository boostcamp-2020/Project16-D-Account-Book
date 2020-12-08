import React, { useEffect } from 'react';
import FormFilter from './FormFilter';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import { inputs, changes } from '../../../../__dummy-data__/components/modal/modalFilter';
import useStore from '../../../../hook/use-store/useStore';
import { useObserver } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { ParsedQuery } from 'query-string';

const FormModalFilter = ({ accountbookId }: { accountbookId: number }): JSX.Element => {
  const history = useHistory();
  const { formFilterStore } = useStore().rootStore.modalStore;

  const closeModal = () => {
    formFilterStore.setShow(false);
  };

  const onClickApply = () => {
    closeModal();
    const query = formFilterStore.getQuery;
    history.push(`/accountbooks/${accountbookId}?${query}`);
  };

  useEffect(() => {
    formFilterStore.init();
    if (formFilterStore.query) {
      const {
        start_date,
        end_date,
        account,
        income_category,
        expenditure_category,
      } = formFilterStore.query as ParsedQuery<string>;
      formFilterStore.setInfo(
        start_date as string,
        end_date as string,
        account as string,
        income_category as string,
        expenditure_category as string,
      );
    }
  }, []);

  return useObserver(() => (
    <>
      <ModalBackground show={true} closeModal={closeModal}>
        <FormModalWrapper>
          <FormModalHeader
            modalName={'필터'}
            redName={'초기화'}
            blueName={'적용'}
            clickBlue={onClickApply}
            clickRed={formFilterStore.init}
            closeModal={closeModal}
          />
          <FormFilter inputs={inputs} changes={changes} />
        </FormModalWrapper>
      </ModalBackground>
    </>
  ));
};

export default FormModalFilter;
