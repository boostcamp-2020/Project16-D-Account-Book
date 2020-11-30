import React from 'react';
import styled from 'styled-components';
import { DEEP_GRAY } from '../../../constants/color';

interface IProps {
  x: number;
  y: number;
  value: number | string;
}

const Text = styled.text`
  color: lightgray;
  fill: ${DEEP_GRAY};
  font-size: 0.6em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const LineChartText: React.FC<IProps> = ({ x, y, value }: IProps) => {
  return (
    <Text x={x} y={y}>
      {value}
    </Text>
  );
};

export default LineChartText;
