import React from 'react';
import Select, { Options } from '../../../components/inputs/Select';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';

describe('Select 컴포넌트 테스트', () => {
  test('타이틀이 처음에 화면에 출력이 되는지?', () => {
    const expectTitle = '타이틀이 잘 나오는지?';
    const select = render(<Select options={dummyOptions} defaultValue={expectTitle} />);
    select.getByText(expectTitle);
  });

  test('타이틀이 클릭하기 전에는 데이터 리스트가 노출되지 않아야한다.', () => {
    const dummyTitle = 'dummyTitle';
    const select = render(<Select options={dummyOptions} defaultValue={dummyTitle} />);
    dummyOptions.forEach((curr) => {
      const result = select.queryByText(curr.label);
      expect(result).toBeNull();
    });
  });

  test('클릭시 options 데이터 리스트를 출력하는지?', () => {
    const dummyTitle = 'dummyTitle';
    const select = render(<Select options={dummyOptions} defaultValue={dummyTitle} />);
    userEvent.click(select.getByText(dummyTitle));
    dummyOptions.forEach((curr) => {
      select.getByText(curr.label);
    });
  });
});
