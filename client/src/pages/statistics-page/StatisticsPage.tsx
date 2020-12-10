import React, { useState } from 'react';
import HeaderNavigation from '../../components/common/header-navigation/HeaderNavigation';
import HeaderNavigationRightTopWrapper from '../../components/common/header-navigation/HeaderNavigationRightTop';
import Sidebar from '../../components/common/sidebar/Sidebar';
import { smallAccountbookItems } from '../../__dummy-data__/components/smallAccountbookItem/dummyData';
import PieGraphPage from './PieGraphPage';
import styled from 'styled-components';

const PageWrapper = styled.div`
  margin: 100px auto;
  width: 70%;
`;

const StatisticsPage: React.FC = () => {
  const [pieGraph, setPieGraph] = useState<boolean>(true);
  return (
    <>
      <Sidebar smallAccountbooks={smallAccountbookItems} />
      <HeaderNavigationRightTopWrapper>
        <HeaderNavigation currentPage={'statistics'} />
      </HeaderNavigationRightTopWrapper>
      <PageWrapper>
        <PieGraphPage changePage={setPieGraph} />
      </PageWrapper>
    </>
  );
};

export default StatisticsPage;
