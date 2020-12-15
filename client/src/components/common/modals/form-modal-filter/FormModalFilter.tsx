import React, { useEffect } from 'react';
import FormFilter from './FormFilter';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import useStore from '../../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

const FormModalFilter = ({ accountbookId }: { accountbookId: number }): JSX.Element => {
  const history = useHistory();
  const { filterFormStore } = useStore().rootStore.modalStore;
  const { transactionStore } = useStore().rootStore;

  const closeModal = () => {
    filterFormStore.setShow(false);
  };

  const onClickApply = () => {
    closeModal();
    const query = filterFormStore.getQuery;
    history.push(`/accountbooks/${accountbookId}?${query}`);
  };

  useEffect(() => {
    filterFormStore.init();

    if (transactionStore.isFilterMode) {
      filterFormStore.setFilterInfo();
    }
  }, []);

  return (
    <>
      <ModalBackground show={true} closeModal={closeModal} position="absolute">
        <FormModalWrapper>
          <FormModalHeader
            modalName={'필터'}
            redName={'초기화'}
            blueName={'적용'}
            clickBlue={onClickApply}
            clickRed={filterFormStore.init}
            closeModal={closeModal}
          />
          <FormFilter />
        </FormModalWrapper>
      </ModalBackground>
    </>
  );
};

export default observer(FormModalFilter);
