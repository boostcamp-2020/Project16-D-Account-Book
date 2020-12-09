import React from 'react';
import styled, { keyframes } from 'styled-components';
import LineChartBackground from './LineChartBackground';
import LineChartText from './LineChartText';
import XAxisDraw from './XAxisDraw';
import LineChartDot from './LineChartDot';
import { ITransaction } from '../../../types/lineChartValue';
import {
  sortTransactionByValue,
  getUnit,
  gatherByDate,
  createXAxis,
  createYAxis,
  createDotPosition,
  valueFitUnit,
} from './lineChartUtils';

interface IProps {
  transactions: ITransaction[];
}

const chartGap = 30;
const viewX = 500 + chartGap * 2;
const viewY = 300 + chartGap * 2;

interface IPath {
  length: number;
}

const pathAnimation = (length: number) => keyframes`
0%{
  stroke-dashoffset:${length};
  stroke-width:1.5;
}

100%{
  stroke-dashoffset:0;
  stroke-width:1.5;
}
`;

const Path = styled.path<IPath>`
  fill: transparent;
  stroke: dodgerblue;
  stroke-width: 0;
  stroke-dasharray: ${(props) => props.length};
  animation: ${(props) => pathAnimation(props.length)} 1.5s ease 1.7s both;
`;

const LineChart: React.FC<IProps> = ({ transactions }: IProps) => {
  const sortedByDate = gatherByDate(transactions);
  const sortedByValue = sortTransactionByValue(sortedByDate);
  const MAXValue = sortedByValue[sortedByValue.length - 1].value;
  const startDate = sortedByDate[0].date;
  const endDate = sortedByDate[sortedByDate.length - 1].date;
  const unit = getUnit(MAXValue);
  const xAxis = createXAxis(MAXValue, unit);
  const yAxis = createYAxis(startDate, endDate, viewX - 2 * chartGap);

  const calculateXAxisYPosition = (id: number) => {
    const chartSize = viewY - chartGap * 2;
    const yGap = chartSize / (xAxis.length - 1);
    return yGap * (xAxis.length - 1 - id) + chartGap;
  };

  const dotsPosition = sortedByDate.map((transaction) => {
    return createDotPosition(MAXValue, startDate, endDate, viewX - chartGap, viewY - chartGap, chartGap, transaction);
  });

  const createPath = (): string => {
    let ans = `M ${dotsPosition[0][0]} ${dotsPosition[0][1]}`;
    ans += dotsPosition.reduce((acc, curr, id) => {
      if (id === 0) {
        return '';
      }
      return acc + ` L ${curr[0]} ${curr[1]}`;
    }, '');
    return ans;
  };

  const pathD = createPath();
  const pathDLength = ((): number => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathD);
    return path.getTotalLength();
  })();

  return (
    <svg viewBox={`0 0 ${viewX} ${viewY}`}>
      <LineChartBackground xWidth={viewX} yWidth={viewY} gap={chartGap} />
      <LineChartText x={0} y={chartGap / 2} value={unit} />
      {xAxis.map((x, id) => {
        return <LineChartText key={x} x={0} y={calculateXAxisYPosition(id)} value={x} />;
      })}
      {xAxis.map((x, id) => {
        return <XAxisDraw key={id} y={calculateXAxisYPosition(id)} gap={chartGap} xEnd={viewX} />;
      })}
      {yAxis.map((x, id) => {
        return <LineChartText key={x.position} x={chartGap + x.position} y={viewY - chartGap / 2} value={x.date} />;
      })}

      {dotsPosition.map((position, id) => {
        return (
          <LineChartDot
            x={position[0]}
            y={position[1]}
            key={sortedByDate[id].date.valueOf()}
            date={sortedByDate[id].date}
            value={valueFitUnit(sortedByDate[id].value, unit)}
            yWidth={viewY - 2 * chartGap}
            gap={chartGap}
          />
        );
      })}
      <Path d={pathD} length={pathDLength} />
    </svg>
  );
};

export default LineChart;
