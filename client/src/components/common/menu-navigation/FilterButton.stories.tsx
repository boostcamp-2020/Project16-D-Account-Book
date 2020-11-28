import React from 'react';
import FilterButton from './FilterButton';
import styled from 'styled-components';

export default {
  title: 'common/menu-navigation/FilterButton',
  component: FilterButton,
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

export const Default: React.FC = () => {
  return <FilterButton width={24} height={24} />;
};

export const ApplyWrapper: React.FC = () => {
  return (
    <Wrapper>
      <FilterButton width={24} height={24} />
    </Wrapper>
  );
};
