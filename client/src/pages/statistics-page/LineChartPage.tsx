import React, { useEffect } from 'react';
import styled from 'styled-components';
import CategoryNoDependency from '../../components/common/category/CategoryNoDependency';

import LineChartMonth from './LineChartMonth/LineChartMonth';
import { PieGraphPageWrapper, PieHeaderFilter, IncomeExpenditureSwitch } from './PieGraphPage';
import InputRadio from '../../components/common/inputs/input-radio/InputRadio';
import { graphChangeChecker } from '../../types/inputRadio';
import useStore from '../../hook/use-store/useStore';
import useGetParam from '../../hook/use-get-param/useGetParam';
import { observer } from 'mobx-react';
import NotFoundTransaction from '../../components/common/not-found-transaction/NotFoundTransaction';
import LineChart from '../../components/graph/line-chart/LineChart';
import { text } from '../../constants/pieGraphPage';
import color from '../../constants/color';
import { numberWithCommas } from '../../utils/number';

interface ILineChartPage {
  changePage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LineChartTotalValueWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LineChartTotalValue = styled.p`
  margin-right: 1em;
  display: inline-block;
  font-size: 1.3em;
`;

const LineChartPage: React.FC<ILineChartPage> = ({ changePage }: ILineChartPage) => {
  const name = graphChangeChecker.name;
  const left = { ...graphChangeChecker.left, checked: false, onChange: changePage };
  const right = { ...graphChangeChecker.right, checked: true, onChange: changePage };
  const { lineChartStore } = useStore().rootStore;
  const id = useGetParam();

  const switchIncomeExpenditure = (): void => {
    lineChartStore.toggleIncomeMode();
  };
  useEffect(() => {
    lineChartStore.loadTransactions(id);
  }, []);
  return (
    <PieGraphPageWrapper>
      <PieHeaderFilter>
        <LineChartMonth />
      </PieHeaderFilter>
      <PieHeaderFilter>
        <InputRadio name={name} left={left} right={right} />
      </PieHeaderFilter>
      {lineChartStore.monthlyTransactions.length === 0 ? (
        <NotFoundTransaction />
      ) : (
        <>
          <LineChart transactions={lineChartStore.monthlyTransactions} />
          <LineChartTotalValueWrapper>
            <LineChartTotalValue>
              {lineChartStore.incomeMode ? `${text.TOTAL_INCOME} : ` : `${text.TOTAL_EXPENDITURE} : `}
            </LineChartTotalValue>
            <LineChartTotalValue>{numberWithCommas(lineChartStore.monthlyTotalValue) + '원'}</LineChartTotalValue>
          </LineChartTotalValueWrapper>
        </>
      )}
      <IncomeExpenditureSwitch>
        <CategoryNoDependency
          id={99}
          color={color.NAVER_GREEN}
          name={lineChartStore.incomeMode ? text.SHOW_EXPENDITURE : text.SHOW_INCOME}
          onClick={switchIncomeExpenditure}
        />
      </IncomeExpenditureSwitch>
    </PieGraphPageWrapper>
  );
};

export default observer(LineChartPage);
