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

interface ILineChartPage {
  changePage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LineChartTotalValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LineChartTotalValue = styled.p`
  width: 100%;
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
