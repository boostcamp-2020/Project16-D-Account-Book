import React from 'react';
import MenuBackground from './MenuBackground';
import styled from 'styled-components';

export default {
  title: 'common/menu-navigation/MenuBackground',
  component: MenuBackground,
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

export const ApplyWrapper: React.FC = () => {
  return (
    <Wrapper>
      <MenuBackground />
    </Wrapper>
  );
};
