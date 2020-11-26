import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface CircleSVGProps {
  beforePercent: number;
  myPercent: number;
  color: string;
  viewBox: number;
}

export interface StyledCircleSVG {
  cx: number;
  cy: number;
  r: number;
  beforePercent: number;
  myPercent: number;
  remainPercent: number;
  color: string;
  CircleDiameter: number;
}

const CircleAnimation = (AnimationProps: StyledCircleSVG) => keyframes`
100%{
  stroke-dasharray:${(() => {
    if (AnimationProps.beforePercent === 0) {
      return `${AnimationProps.myPercent} 
      ${AnimationProps.remainPercent} 0 0`;
    }
    return `0 
    ${AnimationProps.beforePercent} 
    ${AnimationProps.myPercent}
    ${AnimationProps.remainPercent}
    `;
  })()};
  }
`;

const Circle = styled.circle.attrs<StyledCircleSVG>((props) => ({
  cx: props.cx,
  cy: props.cy,
  r: props.r,
}))<StyledCircleSVG>`
  fill: transparent;
  stroke: ${(props) => props.color};
  stroke-width: 15;
  stroke-dasharray: 0, 0, 0, ${(props) => props.CircleDiameter};
  animation: ${(props) => CircleAnimation(props)} 1s ease both;
`;

const CircleSVG = (props: CircleSVGProps): JSX.Element => {
  const circlePosition = props.viewBox / 2;
  const radius = props.viewBox / 4;
  const CircleDiameter = Math.PI * radius * 2;

  const getLengthByRatio = (ratio: number): number => {
    return (CircleDiameter / 100) * ratio;
  };

  const getCircleArea = (): { beforePercent: number; myPercent: number; remainPercent: number } => {
    const remain = 100 - (props.beforePercent + props.myPercent);
    const beforePercent = getLengthByRatio(props.beforePercent);
    const myPercent = getLengthByRatio(props.myPercent);
    const remainPercent = getLengthByRatio(remain);
    return {
      beforePercent,
      myPercent,
      remainPercent,
    };
  };

  const Areas = getCircleArea();

  return (
    <Circle
      cx={circlePosition}
      cy={circlePosition}
      r={radius}
      color={props.color}
      CircleDiameter={CircleDiameter}
      beforePercent={Areas.beforePercent}
      myPercent={Areas.myPercent}
      remainPercent={Areas.remainPercent}
    />
  );
};

export default CircleSVG;
