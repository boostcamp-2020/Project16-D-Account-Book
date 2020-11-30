import React from 'react';
import styled from 'styled-components';
interface XAxisProps {
  y: number;
  gap: number;
  xEnd: number;
}
const Path = styled.path`
  stroke: lightgray;
  stroke-opacity: 0.5;
`;
const XAxisDraw: React.FC<XAxisProps> = ({ y, gap, xEnd }: XAxisProps) => {
  return <Path d={`M ${gap} ${y} L ${xEnd - gap / 2} ${y}`} />;
};

export default XAxisDraw;
