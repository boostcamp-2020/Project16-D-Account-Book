import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';
import { useHistory } from 'react-router-dom';
import { BLUE } from '../../../constants/color';

const Wrapper = styled.div<{ itemColor: string; bgColor: string }>`
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
  .setting {
    fill: ${({ itemColor }) => itemColor};
  }
  &:hover .setting {
    fill: ${BLUE};
    stroke: ${({ bgColor, itemColor }) => {
      return bgColor === BLUE ? itemColor : null;
    }};
    stroke-width: ${({ bgColor }) => {
      return bgColor === BLUE ? '1px' : null;
    }};
  }
`;

interface props {
  accountbookId: number;
  bgColor: string;
}

const AccountbookSetting = ({ accountbookId, bgColor }: props): JSX.Element => {
  const history = useHistory();

  const itemColor = getTextColor(bgColor);
  return (
    <Wrapper
      itemColor={itemColor}
      bgColor={bgColor}
      onClick={() => history.push(`/accountbooks/${accountbookId}/settings/accountbook`)}
    >
      <svg viewBox="0 0 24 24" className="setting">
        <path d="m22.683 9.394-1.88-.239c-.155-.477-.346-.937-.569-1.374l1.161-1.495c.47-.605.415-1.459-.122-1.979l-1.575-1.575c-.525-.542-1.379-.596-1.985-.127l-1.493 1.161c-.437-.223-.897-.414-1.375-.569l-.239-1.877c-.09-.753-.729-1.32-1.486-1.32h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88c-.478.155-.938.345-1.375.569l-1.494-1.161c-.604-.469-1.458-.415-1.979.122l-1.575 1.574c-.542.526-.597 1.38-.127 1.986l1.161 1.494c-.224.437-.414.897-.569 1.374l-1.877.239c-.753.09-1.32.729-1.32 1.486v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495c-.47.605-.415 1.459.122 1.979l1.575 1.575c.526.541 1.379.595 1.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88c.477-.155.937-.346 1.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575c.542-.526.597-1.379.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239c.753-.09 1.32-.729 1.32-1.486v-2.24c.001-.757-.566-1.396-1.316-1.486zm-10.683 7.606c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      </svg>
    </Wrapper>
  );
};

export default AccountbookSetting;
