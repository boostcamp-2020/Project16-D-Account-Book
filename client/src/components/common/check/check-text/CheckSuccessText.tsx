import React from 'react';
import styled from 'styled-components';
import { LIGHT_GREEN } from '../../../../constants/color';

const CheckSuccessTextWrapper = styled.p`
  color: ${LIGHT_GREEN};
  padding: 0;
  margin: 0;
`;

const CheckSuccessText: React.FC = () => {
  return <CheckSuccessTextWrapper>사용 가능한 이름입니다.</CheckSuccessTextWrapper>;
};

export default CheckSuccessText;
