import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import MultiInputDropdown from '../../../components/common/inputs/multi-input-dropdown/MultiInputDropdown';

describe('MultiInputDropDown 테스트', () => {
  const spy = jest.fn();
  const placeholder = 'placeholder';
  let container;
  beforeEach(() => {
    jest.clearAllMocks();
    container = render(<MultiInputDropdown placeholder={placeholder} items={dummyOptions} onChange={spy} />);
  });
  test('첫 렌더링시에는 placeholder가 출력되야한다.', () => {
    screen.getByText(placeholder);
  });
  test('리스트 아이템을 클릭하면 placeholder가 해당 아이템으로 변경된다.', () => {
    userEvent.click(screen.getByText(placeholder));
    userEvent.click(screen.getByText(/optionLabel1/));
    const result = screen.queryAllByText(/optionLabel1/g);
    expect(result.length).toBe(2);
  });
  test('리스트 아이템을 두번 클릭하면 체크가 해제되어야한다.', () => {
    const header = screen.getByText(placeholder);
    userEvent.click(header);
    const target = screen.getByText(/optionLabel3/);
    userEvent.click(target);
    expect(screen.queryAllByText(/optionLabel3/).length).toBe(2);
    userEvent.click(target);
    const result = screen.queryAllByText(/optionLabel3/g);
    expect(result.length).toBe(1);
  });
  test('리스트 아이템을 여러개 누르면 아이템1,아이템2,아이템3 형식으로 변경된다.', () => {
    const header = screen.getByText(placeholder);
    userEvent.click(header);
    userEvent.click(screen.getByText(/optionLabel1/));
    userEvent.click(screen.getByText(/optionLabel2/));
    userEvent.click(screen.getByText(/optionLabel3/));
    screen.queryByText('optionLabel1,optionLabel2,optionLabel3');
  });
});
