import React, { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import ExportButton from '../../components/export-button/ExportButton';
import useStore from '../../hook/use-store/useStore';
import Expenditure from '../../types/expenditure';
import Income from '../../types/income';
import { toJS } from 'mobx';
import { sortByDate } from '../../utils/sortByDate';
import { csvHeaders, fileName } from '../../constants/csv';

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
    const loadTransaction = async () => {
      await transactionStore.getTransactions(accountbookId, new Date(0), new Date());
      const csvTransactions = transactionStore.transactions.map((item) => {
        if ((item as Expenditure).place) {
          return {
            amount: -item.amount,
            account: (item as Expenditure).place,
            date: new Date((item.date as string).split('T')[0]),
            memo: item.memo,
          };
        } else {
          return {
            amount: item.amount,
            account: (item as Income).content,
            date: new Date((item.date as string).split('T')[0]),
            memo: item.memo,
          };
        }
      });
      transactionStore.loadCsvTransactions(csvTransactions);
    };

    loadTransaction();
  }, []);

  const data = transactionStore.csvTransactions.map((item) => {
    return toJS(item);
  });

  sortByDate(data, 'date');

  return (
    <SettingsCsvViewWrapper>
      <SettingsItemWrapper>
        <Label>
          데이터 내보내기
          <CSVLink headers={csvHeaders} data={data} filename={fileName}>
            <ExportButton />
          </CSVLink>
        </Label>
        <Content>현재 선택한 가계부에 기록되어 있는 거래 내역을 CSV 파일로 생성하여 다운받으실 수 있습니다.</Content>
      </SettingsItemWrapper>
    </SettingsCsvViewWrapper>
  );
};

export default observer(SettingsCsvView);
