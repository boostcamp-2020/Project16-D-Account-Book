import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import ChangeDateContainerView from '../../../components/common/change-date-container/ChangeDateContainerView';
import useGetParam from '../../../hook/use-get-param/useGetParam';
import useStore from '../../../hook/use-store/useStore';

const DateContainerWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: -40px;
`;

const LineChartMonth: React.FC = () => {
  const id = useGetParam();
  const { lineChartStore } = useStore().rootStore;
  const prevClick = (): void => {
    lineChartStore.prevMonth(id);
  };
  const nextClick = (): void => {
    lineChartStore.nextMonth(id);
  };
  return (
    <DateContainerWrapper>
      <ChangeDateContainerView prevDate={lineChartStore.currentDate} prevClick={prevClick} nextClick={nextClick} />
    </DateContainerWrapper>
  );
};

export default observer(LineChartMonth);
