import React, { useEffect } from 'react';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import AddAccountbookCard from '../../components/accountbook-selection-page/add-accountbook-card/AddAccountbookCard';

const ViewWrapper = styled.div`
  width: 40%;
  padding-top: 5%;
  margin: 0 auto;
`;

const AccountbookSelectionPage: React.FC = () => {
  return (
    <ViewWrapper>
      <div>가계부 선택 페이지 임시</div>
      <br />
      <AddAccountbookCard />
    </ViewWrapper>
  );
};

export default AccountbookSelectionPage;
