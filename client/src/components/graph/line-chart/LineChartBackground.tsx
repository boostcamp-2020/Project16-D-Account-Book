import React from 'react';
import styled from 'styled-components';

interface IProps {
  gap: number;
  xWidth: number;
  yWidth: number;
}

const Path = styled.path`
  stroke: lightgray;
  stroke-width: 2px;
  fill: transparent;
`;

const LineChartBackground: React.FC<IProps> = ({ gap, xWidth, yWidth }: IProps) => {
  return <Path d={`M ${gap} ${gap / 2} L ${gap} ${yWidth - gap} L ${xWidth - gap / 2} ${yWidth - gap}`} />;
};

export default LineChartBackground;
