import React from 'react';
import styled from 'styled-components';
import { Options } from '../../../../types/options';
import SingleInputDropdown from '../../inputs/single-input-dropdown/SingleInputDropdown';
import SelectPaymentMethod from '../../inputs/select-payment-method/SelectPaymentMethod';
import MultiInputDropdownWithCheckBox from '../../inputs/multi-input-dropdown/MultiInputDropdownWithCheckBox';

interface IFormModalFilter {
  inputs: {
    dateRange: {
      placeholder: string;
      items: Options[];
    };
    startDate: string;
    endDate: string;
    payment: {
      placeholder: string;
      items: Options[];
    };
    incomeCategories: {
      placeholder: string;
      items: Options[];
    };
    expenditureCategories: {
      placeholder: string;
      items: Options[];
    };
  };
  changes: {
    dateRage: (e: string) => void;
    payment: (e: string[]) => void;
    incomeCategories: (e: string[]) => void;
    expenditureCategories: (e: string[]) => void;
  };
}

const FormModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 70%;
  padding: 0%;
  margin: 0%;
`;

const InputLabel = styled.p`
  font-size: 1.3em;
`;

const DateRange = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormModalFilter: React.FC<IFormModalFilter> = ({ inputs, changes }: IFormModalFilter) => {
  return (
    <FormModalWrapper>
      <InputWrapper>
        <InputLabel>기간</InputLabel>
        <SingleInputDropdown placeholder={'기간'} items={inputs.dateRange.items} onChange={changes?.dateRage} />
        <DateRange>
          <p>{inputs.startDate}</p>
          <p>{inputs.endDate}</p>
        </DateRange>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>결제수단</InputLabel>
        <SelectPaymentMethod placeholder={'결제수단'} items={inputs.payment.items} onChange={changes.payment} />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>카테고리</InputLabel>
        <MultiInputDropdownWithCheckBox
          placeholder={'지출'}
          checkBoxName={'지출'}
          items={inputs.expenditureCategories.items}
          onChange={changes.expenditureCategories}
        />
        <MultiInputDropdownWithCheckBox
          placeholder={'수입'}
          checkBoxName={'수입'}
          items={inputs.incomeCategories.items}
          onChange={changes.expenditureCategories}
        />
      </InputWrapper>
    </FormModalWrapper>
  );
};

export default FormModalFilter;
