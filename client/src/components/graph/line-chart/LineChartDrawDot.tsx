import React from 'react';
import ITransaction from '../../../types/lineChartValue';
import { valueFitUnit, ValueUnit } from './lineChartUtils';
import LineChartDot from './LineChartDot';
interface ILineChartDrawDot {
  dotsPosition: [number, number][];
  sortedByDate: ITransaction[];
  unit: ValueUnit;
  viewY: number;
  chartGap: number;
}

const LineChartDrawDot: React.FC<ILineChartDrawDot> = ({
  dotsPosition,
  sortedByDate,
  unit,
  viewY,
  chartGap,
}: ILineChartDrawDot) => {
  return (
    <>
      {dotsPosition.map((position, id) => {
        const value = valueFitUnit(sortedByDate[id].value, unit);
        return (
          <LineChartDot
            x={position[0]}
            y={position[1]}
            key={sortedByDate[id].date.valueOf() + id + position[0] + position[1] + value}
            date={sortedByDate[id].date}
            value={value}
            yWidth={viewY - 2 * chartGap}
            gap={chartGap}
          />
        );
      })}
    </>
  );
};

export default LineChartDrawDot;
