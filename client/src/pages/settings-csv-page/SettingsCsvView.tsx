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

  const headers = [
    { label: '번호', key: 'id' },
    { label: '금액', key: 'amount' },
    { label: '결제수단', key: 'account' },
    { label: '날짜', key: 'date' },
    { label: '메모', key: 'memo' },
  ];

  const csvData = [
    { id: 1, amount: 3000, account: '길에서 주움', date: '2020-11-16T15:00:00.000Z', memo: '지갑주움' },
    { id: 2, amount: 500000, account: '부스트캠프', date: '2020-11-19T15:00:00.000Z', memo: '월급' },
    { id: 3, amount: 3000000, account: '주식', date: '2020-11-12T15:00:00.000Z', memo: '주식' },
    { id: 4, amount: 10000, account: '비고', date: '2020-11-12T15:00:00.000Z', memo: null },
    { id: 5, amount: 20000, account: '부업', date: '2020-11-12T15:00:00.000Z', memo: '부업' },
    { id: 6, amount: 30000, account: '집앞', date: '2020-11-13T15:00:00.000Z', memo: '아이폰판매' },
    { id: 7, amount: 40000, account: '장난감판매', date: '2020-11-14T15:00:00.000Z', memo: '장난감판매' },
    { id: 8, amount: 50000, account: '빚청산함', date: '2020-11-12T15:00:00.000Z', memo: '빚청산' },
    { id: 9, amount: 20000, account: '계산기', date: '2020-10-31T15:00:00.000Z', memo: '계산기판매' },
    { id: 10, amount: 70000, account: '집앞', date: '2020-11-06T15:00:00.000Z', memo: null },
    { id: 1, amount: 8300, account: '맘스터치', date: '2020-11-30T15:00:00.000Z', memo: '' },
    { id: 2, amount: 11200, account: '샴푸', date: '2020-11-19T15:00:00.000Z', memo: '할인중이었음' },
    { id: 3, amount: 150000, account: '장례식장', date: '2020-11-12T15:00:00.000Z', memo: null },
    { id: 4, amount: 9900, account: '인프런', date: '2020-11-12T15:00:00.000Z', memo: '타입스크립트 강의' },
    { id: 5, amount: 53800, account: '통신요금', date: '2020-11-12T15:00:00.000Z', memo: 'KT' },
    { id: 6, amount: 35000, account: '막걸리', date: '2020-11-13T15:00:00.000Z', memo: '기억이안남' },
    { id: 7, amount: 17000, account: '소설책', date: '2020-11-14T15:00:00.000Z', memo: '아르테니스' },
    { id: 8, amount: 5700, account: '택시비', date: '2020-11-12T15:00:00.000Z', memo: null },
    { id: 9, amount: 5300, account: '택시비', date: '2020-10-31T15:00:00.000Z', memo: '학교에서 집으로감' },
  ];

  return (
    <SettingsCsvViewWrapper>
      <SettingsItemWrapper>
        <Label>
          데이터 내보내기
          <CSVLink header={headers} data={csvData} filename="accountbook_all_transactions.csv">
            <ExportButton />
          </CSVLink>
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
