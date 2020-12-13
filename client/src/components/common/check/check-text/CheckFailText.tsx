import React from 'react';
import styled from 'styled-components';
import { FAIL_RED } from '../../../../constants/color';

const CheckFailTextWrapper = styled.p`
  color: ${FAIL_RED};
  text-align: center;
  height: 1rem;
`;

const CheckFailText: React.FC = () => {
  return <CheckFailTextWrapper>이미 사용 중인 이름입니다.</CheckFailTextWrapper>;
};

export default CheckFailText;
