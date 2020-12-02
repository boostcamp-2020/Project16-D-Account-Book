import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SingleInputDropDown from '../../../components/common/inputs/single-input-dropdown/SingleInputDropdown';

describe('싱글 인풋 DropDown 테스트', () => {
  const placeholder = 'SingleInput';
  const spy = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    render(<SingleInputDropDown items={dummyOptions} placeholder={placeholder} onChange={spy} />);
  });
  test('선택된것이 없다면 placeholder가 출력된다.', () => {
    screen.getByText(placeholder);
  });
  test('아이템 선택시 해당 아이템의 Label이 header에 출력된다.', () => {
    userEvent.click(screen.getByText(placeholder));
    userEvent.click(screen.getByText(/optionLabel1/));
    screen.getByText(/optionLabel1/);
  });
  test('성공적으로 onChange 함수가 호출된다.', () => {
    userEvent.click(screen.getByText(placeholder));
    userEvent.click(screen.getByText(/optionLabel1/));
    expect(spy.mock.calls[0][0]).toBe('optionValue1');
  });
  test('미리 선택된 값을 입력하는것도 가능해야한다.', () => {
    render(
      <SingleInputDropDown
        items={dummyOptions}
        placeholder={placeholder}
        onChange={spy}
        defaultSelectValue={dummyOptions[0].value}
      />,
    );
    screen.getByText(/optionLabel1/);
  });
});
