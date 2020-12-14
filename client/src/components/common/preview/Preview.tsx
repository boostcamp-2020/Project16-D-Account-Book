import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../color-picker/ColorPicker';
import { getTextColor } from '../../../utils/color';
interface PreviewProps {
  color: string;
  title?: string;
  description?: string;
  onChange: (color: { hex: string }) => void;
}

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

interface PreviewContentProps {
  color: string;
}
const PreviewContent = styled.div<PreviewContentProps>`
  flex: 1;
  padding: 10px;
  margin-right: 1em;
  background-color: ${(props) => props.color};
  height: 90px;
  border-radius: 10px;
`;

const PreviewContentText = styled.p<PreviewContentProps>`
  color: ${(props) => props.color};
`;

const Preview: React.FC<PreviewProps> = ({ title, description, color, onChange }: PreviewProps) => {
  const fontColor = getTextColor(color);
  return (
    <PreviewWrapper>
      <PreviewContent color={color}>
        {title && <PreviewContentText color={fontColor}>{title}</PreviewContentText>}
        {description && <PreviewContentText color={fontColor}>{description}</PreviewContentText>}
      </PreviewContent>
      <ColorPicker inputColor={{ hex: color }} setInputColor={onChange} />
    </PreviewWrapper>
  );
};

export default Preview;
