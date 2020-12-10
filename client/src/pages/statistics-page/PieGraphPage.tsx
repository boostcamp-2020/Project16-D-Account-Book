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
import CategoryNoDependency from '../../components/common/category/CategoryNoDependency';
import { text } from '../../constants/pieGraphPage';
import color from '../../constants/color';

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

const IncomeExpenditureSwitch = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
`;

interface IPieGraphPage {
  changePage: (change: boolean) => void;
}

const PieGraphPage: React.FC<IPieGraphPage> = ({ changePage }: IPieGraphPage) => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const pieGraphStore = rootStore.pieGraphPageStore;
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
  const switchIncomeExpenditure = (): void => {
    pieGraphStore.switchIncomeMode();
  };
  return (
    <PieGraphPageWrapper>
      <PieHeaderFilter>
        <DropdownWrapper>
          <SingleInputDropDown
            items={pieGraphStore.dateOptions}
            placeholder={text.DATE_INPUT_PLACEHOLDER}
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
              <BarChartHeader>{pieGraphStore.incomeMode ? text.TOTAL_EXPENDITURE : text.TOTAL_INCOME}</BarChartHeader>
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
            <IncomeExpenditureSwitch>
              <CategoryNoDependency
                bgColor={color.NAVER_GREEN}
                text={pieGraphStore.incomeMode ? text.SHOW_EXPENDITURE : text.SHOW_INCOME}
                onClick={switchIncomeExpenditure}
              ></CategoryNoDependency>
            </IncomeExpenditureSwitch>
          </BarChartWrapper>
        </>
      )}
    </PieGraphPageWrapper>
  );
};

export default observer(PieGraphPage);
