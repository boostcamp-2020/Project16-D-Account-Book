import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import InputDropDown from '../../../components/inputs/Input-drop-down/InputDropDown';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
describe('단일 선택만 가능한 dropdown input 컴포넌트 테스트', () => {
  test('헤더에는 무조건 title이 출력된다.', () => {
    render(<InputDropDown items={dummyOptions} header={'title'} />);
    screen.getByText('title');
  });
  test('헤더를 클릭하면 데이터 리스트가 출력된다.', () => {
    render(<InputDropDown items={dummyOptions} header={'title'} />);
    userEvent.click(screen.getByText('title'));
    screen.getAllByText(/optionLabel\d/g);
  });
  test('헤더를 한번 더 클릭하면 리스트가 닫혀야한다.', () => {
    render(<InputDropDown items={dummyOptions} header={'title'} />);
    userEvent.click(screen.getByText('title'));
    userEvent.click(screen.getByText('title'));
    const result = screen.queryAllByText(/optionLabel\d/g);
    expect(result.length).toBe(0);
  });
  test('아이템을 누르면 함수가 리스트가 닫혀야한다.', () => {
    render(<InputDropDown items={dummyOptions} header={'title'} />);
    userEvent.click(screen.getByText('title'));
    userEvent.click(screen.getByText(/optionLabel1/));
    const result = screen.queryAllByText(/optionLabel\d/g);
    expect(result.length).toBe(0);
  });
  test('아이템을 누르면 callBack으로 아이템의 value를 인자로한 함수가 실행되야한다.', () => {
    const spy = jest.fn();
    render(<InputDropDown items={dummyOptions} header={'title'} onChange={spy} />);
    userEvent.click(screen.getByText('title'));
    userEvent.click(screen.getByText(/optionLabel1/));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe('optionLabel1');
  });
  test('header와 dropdown 영역 외의 것이 클릭되어져도 리스트가 닫혀야한다.', () => {
    const Root: React.FC = () => {
      return (
        <div>
          <InputDropDown items={dummyOptions} header={'title'} />
          <div>Sibling</div>
        </div>
      );
    };
    render(<Root />);
    userEvent.click(screen.getByText('title'));
    userEvent.click(screen.getByText('Sibling'));
    const result = screen.queryAllByText(/optionLabel\d/g);
    expect(result.length).toBe(0);
  });
  test('multi mode에서는 드랍다운이 클릭되어져도 리스트가 닫히지 않아야 한다.', () => {
    const spy = jest.fn();
    render(<InputDropDown multi={true} items={dummyOptions} header={'title'} onChange={spy} />);
    userEvent.click(screen.getByText('title'));
    userEvent.click(screen.getByText(/optionLabel1/));
    expect(spy.mock.calls[0][0]).toBe('optionLabel1');
    userEvent.click(screen.getByText(/optionLabel2/));
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0]).toBe('optionLabel2');
  });
});
