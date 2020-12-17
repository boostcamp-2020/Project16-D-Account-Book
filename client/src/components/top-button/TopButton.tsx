import React from 'react';
import styled from 'styled-components';
import MenuBackground from '../common/menu-navigation/menu-background/MenuBackground';

export const SvgWrapper = styled.svg<{ width: number; height: number }>`
  position: relative;
  left: ${({ width }) => `calc(50% - ${width / 2}px)`};
  top: ${({ height }) => `calc(50% - ${height / 2}px)`};
`;

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 5%;
  bottom: 2%;
  width: 40px;
  height: 40px;
`;

interface Props {
  width: number;
  height: number;
}

const TopButton: React.FC<Props> = ({ width, height }: Props) => {
  return (
    <NavigationWrapper>
      <MenuBackground>
        <SvgWrapper width={width} height={height}>
          <svg version="1.1" id="Capa_1" viewBox="0 0 512 512">
            <g>
              <g>
                <path
                  d="M425.208,239.778c-0.026-0.017-0.034-0.026-0.043-0.043l-148.361-146.5c-11.494-11.358-30.14-11.298-41.515,0.085
			L86.801,239.77C80.35,246.212,76.8,254.788,76.8,263.902s3.55,17.69,10.001,24.141c13.303,13.321,34.961,13.303,48.205,0.06
			l86.861-85.086v274.85C221.867,496.691,237.175,512,256,512s34.133-15.309,34.133-34.133V202.999l86.801,85.052
			c13.312,13.312,34.961,13.312,48.273,0S438.511,253.082,425.208,239.778z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M401.067,0H110.933C92.109,0,76.8,15.309,76.8,34.133c0,18.825,15.309,34.133,34.133,34.133h290.133
			c18.825,0,34.133-15.309,34.133-34.133C435.2,15.309,419.891,0,401.067,0z"
                />
              </g>
            </g>
          </svg>
        </SvgWrapper>
      </MenuBackground>
    </NavigationWrapper>
  );
};

export default TopButton;
