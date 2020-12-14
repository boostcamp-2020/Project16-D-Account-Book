import React, { useState } from 'react';
import HeaderNavigation from '../../components/common/header-navigation/HeaderNavigation';
import HeaderNavigationRightTopWrapper from '../../components/common/header-navigation/HeaderNavigationRightTop';
import Sidebar from '../../components/common/sidebar/Sidebar';
import PieGraphPage from './PieGraphPage';
import LineChartPage from './LineChartPage';
import styled from 'styled-components';

const PageWrapper = styled.div`
  margin: 100px auto;
  width: 70%;
`;

const StatisticsPage: React.FC = () => {
  const [pieGraph, setPieGraph] = useState<boolean>(true);
  const graphChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'pie') {
      setPieGraph(true);
    } else {
      setPieGraph(false);
    }
  };
  return (
    <>
      <Sidebar />
      <HeaderNavigationRightTopWrapper>
        <HeaderNavigation currentPage={'statistics'} />
      </HeaderNavigationRightTopWrapper>
      <PageWrapper>
        {pieGraph ? <PieGraphPage changePage={graphChange} /> : <LineChartPage changePage={graphChange} />}
      </PageWrapper>
    </>
  );
};

export default StatisticsPage;
