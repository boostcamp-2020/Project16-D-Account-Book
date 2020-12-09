import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../color-picker/ColorPicker';
import Account from '../account/Account';

interface PreviewProps {
  color: string;
  title?: string;
  onChange: (color: { hex: string }) => void;
}

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const AccountPreview: React.FC<PreviewProps> = ({ title, color, onChange }: PreviewProps) => {
  return (
    <PreviewWrapper>
      <Account text={title} bgColor={color} preview={'none'} />
      <ColorPicker inputColor={{ hex: color }} setInputColor={onChange} />
    </PreviewWrapper>
  );
};

export default AccountPreview;
