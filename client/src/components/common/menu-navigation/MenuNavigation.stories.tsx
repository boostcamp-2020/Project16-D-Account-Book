import React from 'react';
import MenuNavigation from './MenuNavigation';
import styled from 'styled-components';

export default {
  title: 'common/menu-navigation/MenuNavigation',
  component: MenuNavigation,
};

const Wrapper = styled.div`
  width: 40px;
  height: 140px;
`;

export const Default: React.FC = () => {
  return <MenuNavigation />;
};

export const ApplyWrapper: React.FC = () => {
  return (
    <Wrapper>
      <MenuNavigation />
    </Wrapper>
  );
};
