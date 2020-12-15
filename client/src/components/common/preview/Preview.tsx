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
  align-items: flex-end;
`;
interface PreviewContentProps {
  color: string;
}
const PreviewContent = styled.div<PreviewContentProps>`
  width: 40vw;
  padding: 10px 20px;
  margin-right: 1em;
  background-color: ${(props) => props.color};
  text-overflow: ellipsis;
  word-wrap: break-word;
  border-radius: 10px;
`;

const PreviewContentName = styled.p<PreviewContentProps>`
  color: ${(props) => props.color};
  height: 25px;
  :nth-child(1) {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const Preview: React.FC<PreviewProps> = ({ title, description, color, onChange }: PreviewProps) => {
  const fontColor = getTextColor(color);
  return (
    <PreviewWrapper>
      <PreviewContent color={color}>
        <PreviewContentName color={fontColor}>{title}</PreviewContentName>
        <PreviewContentName color={fontColor}>{description}</PreviewContentName>
      </PreviewContent>
      <ColorPicker inputColor={{ hex: color }} setInputColor={onChange} />
    </PreviewWrapper>
  );
};
export default Preview;
