import React, { useState } from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import Preview from '../../components/common/preview/Preview';

const SettingsAccountbookPageWrapper = styled.div`
  display: flex;
`;

const SettingsBody = styled.div`
  position: fixed;
  top: 0%;
  left: 18%;
  padding: 50px 50px;
`;

const PreviewWrapper = styled.div`
  width: 700px;
`;

const SettingsAccountbookPage = (): JSX.Element => {
  const [inputColor, setInputColor] = useState<string>('black');
  const title = '가계부 1';
  const description = '부스트캠프 커넥트 재단 가계부';
  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return (
    <SettingsAccountbookPageWrapper>
      <SettingsSidebar currentPage={'accountbook'} />
      <SettingsBody>
        <PreviewWrapper>
          <Preview title={title} description={description} color={inputColor} onChange={onChange} />
        </PreviewWrapper>
      </SettingsBody>
    </SettingsAccountbookPageWrapper>
  );
};

export default SettingsAccountbookPage;
