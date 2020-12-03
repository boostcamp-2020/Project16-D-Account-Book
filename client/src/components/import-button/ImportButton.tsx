import React from 'react';
import styled from 'styled-components';
import { BLUE } from '../../constants/color';

interface ImportButtonProps {
  onClick?: () => void;
}

const ImportButtonWrapper = styled.div`
  cursor: pointer;
  &:hover {
    fill: ${BLUE};
  }
`;

const ImportButton: React.FC<ImportButtonProps> = ({ onClick }: ImportButtonProps) => {
  return (
    <ImportButtonWrapper>
      <svg onClick={onClick} width="30" height="30" style={{ marginLeft: 20 }} viewBox="0 0 512 512">
        <g>
          <g>
            <path
              d="M480,64.002H352v64h96v288H160V288.994H96v159.008c0,17.696,14.304,32,32,32h352c17.664,0,32-14.304,32-32v-352
     C512,78.338,497.664,64.002,480,64.002z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M208,96.002h-48v-48c0-6.048-3.424-11.584-8.864-14.304c-5.408-2.72-11.936-2.144-16.736,1.504l-128,96
     c-4.032,3.008-6.4,7.776-6.4,12.8s2.368,9.792,6.4,12.8l128,96c4.832,3.648,11.36,4.224,16.768,1.504
     c5.408-2.72,8.832-8.256,8.832-14.304v-48h61.12c54.912,0,104.256,30.528,128.8,79.648l3.776,7.52
     c2.752,5.504,8.352,8.832,14.304,8.832c1.216,0,2.464-0.128,3.68-0.416c7.2-1.696,12.32-8.16,12.32-15.584
     C384,174.946,305.056,96.002,208,96.002z"
            />
          </g>
        </g>
      </svg>
    </ImportButtonWrapper>
  );
};

export default ImportButton;
