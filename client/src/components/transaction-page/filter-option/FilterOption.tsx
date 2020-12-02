import React from 'react';
import styled from 'styled-components';
import CancelButton from './CancelButton';
import Query from '../../../types/query';
import { getFormattedDate } from '../../../utils/date';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

const Option = styled.div`
  display: flex;
  margin: 0 auto;
  .text {
    color: gray;
  }
  .btn {
    margin-left: 5px;
  }
`;

interface Props {
  query: Query;
}

const getDateText = (startDate: string, endDate: string): string => {
  if (!startDate || !endDate) return '';
  const end = getFormattedDate({ date: new Date(new Date(endDate).getTime() - 1000 * 60 * 60 * 24), format: '.' });
  return `${startDate} ~ ${end}`;
};

const getOptionText = (account: string, incomeCategory: string, expenditureCategory: string): string => {
  let text = '';
  if (account) {
    text += '결제수단 · ';
  }
  if (incomeCategory) {
    text += '수입 · ';
  }
  if (expenditureCategory) {
    text += '지출 · ';
  }
  return text.substring(0, text.length - 2);
};

const FilterOption: React.FC<Props> = ({ query }: Props) => {
  const { startDate, endDate, account, incomeCategory, expenditureCategory } = query;
  return (
    <Wrapper>
      <h3>{getDateText(startDate as string, endDate as string)}</h3>
      <Option>
        <div className="text">
          {getOptionText(account as string, incomeCategory as string, expenditureCategory as string)}
        </div>
        <div className="btn">
          <CancelButton />
        </div>
      </Option>
    </Wrapper>
  );
};

export default FilterOption;