import React, { useState } from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

interface ILineChartDot {
  x: number;
  y: number;
  date: Date;
  value: number;
  yWidth: number;
  gap: number;
}

interface ICircle {
  cx: number;
  cy: number;
  gap: number;
  width: number;
}

const initialVibrate = (yWidth: number, gap: number) => keyframes`
0%{
  cy:${yWidth + gap};
}
100%{
  cy:${yWidth + gap + 5};
}
`;

const goToDefault = (yWidth: number, gap: number, y: number) => keyframes`
0%{
  cy:${yWidth + gap};
}

100%{
  cy:default;
}

`;

const Circle = styled.circle<ICircle>`
  animation: ${(props) => {
        return initialVibrate(props.width, props.gap);
      }}
      0.3s ease alternate 4,
    ${(props) => goToDefault(props.width, props.gap, props.cy)} 0.5s ease 1.2s;
`;

const G = styled.g``;

const Text = styled.text`
  color: lightgray;
  font-size: 0.6em;
  font-weight: bold;
`;

const Foreign = styled.foreignObject`
  font-size: 0.6em;
  display: inline-block;
  color: white;
  background-color: #555;
  text-align: center;
  border-radius: 6px;
  z-index: 30;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
const LineChartDot: React.FC<ILineChartDot> = ({ x, y, date, value, yWidth, gap }: ILineChartDot) => {
  const [r, setR] = useState<number>(6);
  const [show, setShow] = useState<boolean>(false);

  const enterMouse = (): void => {
    setR(9);
    setShow(true);
  };

  const leaveMouse = (): void => {
    setR(6);
    setShow(false);
  };
  return (
    <G onMouseEnter={enterMouse} onMouseLeave={leaveMouse}>
      {show && (
        <Foreign x={x - r} y={y - 3 * r} width="30" height={15}>
          <div> {value}</div>
        </Foreign>
      )}
      <Circle cx={x} cy={y} width={yWidth} gap={gap} r={r} fill="tomato" />
    </G>
  );
};

export default LineChartDot;
