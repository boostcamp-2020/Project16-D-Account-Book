import React from 'react';
import styled, { keyframes } from 'styled-components';

interface CircleSVGProps {
  beforePercent: number;
  myPercent: number;
  color: string;
  viewBox: number
}

interface CircleProp extends CircleSVGProps {
  color: string;
  remainPercent: number;
  CircleDiameter: number;
}


const CircleAnimation = (AnimationProps: CircleProp) => keyframes`
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

const Circle = styled.circle`
fill: transparent;
stroke: ${(props: CircleProp) => props.color};
stroke-width: 15;
stroke-dasharray: 0, 0, 0, ${(props: CircleProp) => props.CircleDiameter};
animation: ${(props: CircleProp) => CircleAnimation(props)} 1s ease-in both;
`;

const CircleSVG = (props: CircleSVGProps) => {
  const circlePosition = props.viewBox / 2;
  const radius = props.viewBox / 4;
  const CircleDiameter = Math.PI * radius * 2;

  const getLengthByRatio = (ratio: number): number => {
    return (CircleDiameter / 100) * ratio;
  }


  const getCircleArea = (): object => {
    const remain = 100 - (props.beforePercent + props.myPercent);
    const beforePercent = getLengthByRatio(props.beforePercent);
    const myPercent = getLengthByRatio(props.myPercent);
    const remainPercent = getLengthByRatio(remain);
    return {
      beforePercent,
      myPercent,
      remainPercent
    }
  }

  const Areas = getCircleArea();

  return (
    <Circle
      cx={circlePosition}
      cy={circlePosition}
      r={radius}
      color={props.color}
      CircleDiameter={CircleDiameter}
      {...Areas}
    ></Circle>
  )
}

export default CircleSVG;