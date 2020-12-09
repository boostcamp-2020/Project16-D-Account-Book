import React, { useEffect } from 'react';
import styled from 'styled-components';
import InputWithNextButton from '../../components/common/inputs/input-with-next-button/InputWithNextButton';
import SingleInputDropDown from '../../components/common/inputs/single-input-dropdown/SingleInputDropdown';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import useGetParam from '../../hook/use-get-param/useGetParam';
import PieGraph from '../../components/graph/pie/PieGraph';
import NotFoundTransaction from '../../components/common/not-found-transaction/NotFoundTransaction';

const PieGraphPageWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;
const PieHeaderFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const DropdownWrapper = styled.div`
  flex: 1;
  margin-right: 3em;
`;

const InputWrapper = styled.div`
  flex: 1;
  z-index: 5;
`;

const PieGraphWrapper = styled.div`
  margin: 0 auto;
  margin-top: -5%;
  width: 70%;
`;

const PieGraphPage: React.FC = () => {
  const { rootStore } = useStore();
  console.log('re rendered');
  const id = useGetParam();
  const pieGraphStore = rootStore.pieGraphPageStore;
  console.log(pieGraphStore.transactions);
  console.log(pieGraphStore.pieChartValue);
  console.log(pieGraphStore.boxChartValue);
  useEffect(() => {
    pieGraphStore.loadTransactions(id);
  }, []);
  const selectDateChanged = (string): void => {
    pieGraphStore.changeSelectedDate(string, id);
  };
  const clickPrevButton = (): void => {
    pieGraphStore.moveToPrev(id);
  };
  const clickNextButton = (): void => {
    pieGraphStore.moveToNext(id);
  };
  return (
    <PieGraphPageWrapper>
      <PieHeaderFilter>
        <DropdownWrapper>
          <SingleInputDropDown
            items={pieGraphStore.dateOptions}
            placeholder={'날짜를 선택해주세요'}
            defaultSelectValue={pieGraphStore.selectedDate}
            onChange={selectDateChanged}
          />
        </DropdownWrapper>
        <InputWrapper>
          <InputWithNextButton
            clickPrev={clickPrevButton}
            clickNext={clickNextButton}
            value={pieGraphStore.filteredDate}
          />
        </InputWrapper>
      </PieHeaderFilter>
      {pieGraphStore.transactions.length === 0 ? (
        <NotFoundTransaction />
      ) : (
        <PieGraphWrapper>
          <PieGraph transactionData={pieGraphStore.pieChartValue} />
        </PieGraphWrapper>
      )}
    </PieGraphPageWrapper>
  );
};

export default observer(PieGraphPage);
