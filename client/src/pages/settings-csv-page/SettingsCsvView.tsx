import React, { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import ExportButton from '../../components/export-button/ExportButton';
import ImportButton from '../../components/import-button/ImportButton';
import useStore from '../../hook/use-store/useStore';
import Expenditure from '../../types/expenditure';
import Income from '../../types/income';

interface Props {
  accountbookId: number;
}

export const SettingsCsvViewWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 25%;
  padding: 50px 50px;
`;

const SettingsItemWrapper = styled.div`
  width: 70vw;
  margin-top: 50px;
  margin-bottom: 25vh;
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 4vh;
  display: flex;
`;

const Content = styled.p`
  margin: 0 0 0.5vh 0;
  font-size: 1.1rem;
`;

const SettingsCsvView: React.FC<Props> = ({ accountbookId }: Props) => {
  const { rootStore } = useStore();
  const { transactionStore } = rootStore;

  useEffect(() => {
    transactionStore.findTransactions(accountbookId, new Date(0), new Date());
    const csvTransactions = transactionStore.transactions.map((item) => {
      if ((item as Expenditure).place) {
        return {
          id: item.id,
          amount: -item.amount,
          account: (item as Expenditure).place,
          date: item.date,
          memo: item.memo,
        };
      } else {
        return {
          id: item.id,
          amount: item.amount,
          account: (item as Income).content,
          date: item.date,
          memo: item.memo,
        };
      }
    });
    transactionStore.loadCsvTransactions(csvTransactions);
  }, []);

  return (
    <SettingsCsvViewWrapper>
      <SettingsItemWrapper>
        <Label>
          데이터 내보내기
          <ExportButton />
        </Label>
        <Content>현재 선택한 가계부에 기록되어 있는 거래 내역을 CSV 파일로 생성하여 다운받으실 수 있습니다.</Content>
      </SettingsItemWrapper>
      <SettingsItemWrapper>
        <Label>
          데이터 불러오기
          <ImportButton />
        </Label>
        <Content>선택한 CSV 파일 내용을 현재 가계부 내용에 추가하실 수 있습니다.</Content>
        <Content>단, CSV 파일은 다음의 형식을 지켜야 합니다.</Content>
      </SettingsItemWrapper>
    </SettingsCsvViewWrapper>
  );
};

export default observer(SettingsCsvView);
