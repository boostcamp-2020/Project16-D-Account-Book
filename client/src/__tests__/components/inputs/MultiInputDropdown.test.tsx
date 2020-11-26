import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import MultiInputDropdown from '../../../components/inputs/multi-input-dropdown/MultiInputDropdown';

describe('MultiInputDropDown 테스트', () => {
  const spy = jest.fn();
  const placeholder = 'placeholder';
  beforeEach(() => {
    jest.clearAllMocks();
    render(<MultiInputDropdown placeholder={placeholder} />);
  });
  test('첫 렌더링시에는 placeholder가 출력되야한다.', () => {});
});
