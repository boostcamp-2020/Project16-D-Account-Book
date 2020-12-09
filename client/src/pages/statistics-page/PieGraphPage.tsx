import React, { useEffect } from 'react';
import styled from 'styled-components';
import InputWithNextButton from '../../components/common/inputs/input-with-next-button/InputWithNextButton';
import SingleInputDropDown from '../../components/common/inputs/single-input-dropdown/SingleInputDropdown';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import useGetParam from '../../hook/use-get-param/useGetParam';
import PieGraph from '../../components/graph/pie/PieGraph';
import NotFoundTransaction from '../../components/common/not-found-transaction/NotFoundTransaction';
import { numberWithCommas } from '../../utils/number';
import BoxGraph from '../../components/graph/box-graph/BoxGraph';
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
  width: 55%;
`;

const BarChartWrapper = styled.div`
  margin-top: 2em;
`;

const BarChartHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
`;

const BarChartHeader = styled.p`
  font-size: 1.2em;
`;

const BarChartList = styled.ul`
  padding: 0;
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
        <>
          <PieGraphWrapper>
            <PieGraph transactionData={pieGraphStore.pieChartValue} />
          </PieGraphWrapper>
          <BarChartWrapper>
            <BarChartHeaderWrapper>
              <BarChartHeader>{pieGraphStore.incomeMode ? '총 지출' : '총 수입'}</BarChartHeader>
              <BarChartHeader>
                {pieGraphStore.incomeMode
                  ? '-' + numberWithCommas(pieGraphStore.totalValue)
                  : '+' + numberWithCommas(pieGraphStore.totalValue)}
              </BarChartHeader>
            </BarChartHeaderWrapper>
            <BarChartList>
              {pieGraphStore.boxChartValue.map((barChart) => {
                return <BoxGraph key={barChart.title} {...barChart} />;
              })}
            </BarChartList>
          </BarChartWrapper>
        </>
      )}
    </PieGraphPageWrapper>
  );
};

export default observer(PieGraphPage);
