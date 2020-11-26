import React from 'react';
import Select, { Options } from '../../../components/inputs/Select';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';

describe('Select 컴포넌트 테스트', () => {
  test('타이틀이 처음에 화면에 출력이 되는지?', () => {
    const expectTitle = '타이틀이 잘 나오는지?';
    const select = render(<Select options={dummyOptions} defaultValue={expectTitle} showDropDown={false} />);
    select.getByText(expectTitle);
  });
  test('showDropDown가 false라면 데이터 리스트가 노출되지 않아야한다.', () => {
    const dummyTitle = 'dummyTitle';
    const select = render(<Select options={dummyOptions} defaultValue={dummyTitle} showDropDown={false} />);
    dummyOptions.forEach((curr) => {
      const result = select.queryByText(curr.label);
      expect(result).toBeNull();
    });
  });
  test('showDropDown가 true라면 데이터 리스트가 노출되어야한다.', () => {
    const dummyTitle = 'dummyTitle';
    const select = render(<Select options={dummyOptions} defaultValue={dummyTitle} showDropDown={true} />);
    dummyOptions.forEach((curr) => {
      const result = select.queryByText(curr.label);
      expect(result).not.toBeNull();
    });
  });
});
