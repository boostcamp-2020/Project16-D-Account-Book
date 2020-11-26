import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import SelectPaymentMethod from '../../../components/inputs/select-payment-method/SelectPaymentMethod';

describe('SelectPaymentMethod 테스트', () => {
  const spy = jest.fn();
  const placeholder = 'placeholder';
  beforeEach(() => {
    jest.clearAllMocks();
    render(<SelectPaymentMethod placeholder={placeholder} onChange={spy} items={dummyOptions} />);
  });
  test('첫 렌더링시 placeholder가 노출되어야한다.', () => {
    screen.getByText(placeholder);
  });
});
