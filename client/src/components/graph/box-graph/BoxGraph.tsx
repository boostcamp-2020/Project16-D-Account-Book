import React from 'react';
import BoxChartValue from '../../../types/boxChartValue';
import styled, { keyframes } from 'styled-components';

const BoxGraphWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BoxGraphTitle = styled.p`
  margin-right: 3em;
`;

const BoxGraphRatio = styled.p`
  margin-right: 3em;
`;

const BoxGraphMain = styled.svg`
  flex: 1;
  height: 2em;
`;

interface Box {
  color: string;
  ratio: number;
}

const BoxAnimation = (ratio: number) => keyframes`
0%{
  width:0%;
  height:100%;
}
30%{
  width:${ratio + '%'};
  height:100%;
}
35%{
  width:${ratio + 1 + '%'};
  height:100%;
}
55%{
  width:${ratio + 0 + '%'};
  height:100%;
}
75%{
  width:${ratio + 0.25 + '%'};
  height:100%;
}
90%{
  width:${ratio + '%'};
  height:100%;
}
100%{
  width:${ratio + '%'};
  height:100%;
}
`;

const Box = styled.rect<Box>`
  width: ${(props) => props.ratio + '%'};
  height: 100%;
  fill: ${(props) => props.color};
  animation: ${(props) => BoxAnimation(props.ratio)} 1.5s ease;
`;

const BoxGraphValue = styled.p`
  width: 10%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const BoxGraph: React.FC<BoxChartValue> = ({ title, color, ratio, value }: BoxChartValue) => {
  return (
    <BoxGraphWrapper>
      <BoxGraphTitle>{title}</BoxGraphTitle>
      <BoxGraphRatio>{ratio}%</BoxGraphRatio>
      <BoxGraphMain>
        <Box x="0" y="0" width={ratio} height={'100%'} color={color} ratio={ratio} />
      </BoxGraphMain>
      <BoxGraphValue>{value}원</BoxGraphValue>
    </BoxGraphWrapper>
  );
};

export default BoxGraph;
