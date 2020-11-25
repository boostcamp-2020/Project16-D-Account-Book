import React, { useRef } from 'react';
import useClickOutside from '../../../hook/use-click-outside/useClickOutside';
import { render, queryByText, getByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useClickMe from '../../../hook/use-click-me/useClickMe';

interface PropsCallback {
  callBack: () => void;
}

const UseClickElement: React.FC<PropsCallback> = ({ callBack }: PropsCallback) => {
  const divRef = useRef<HTMLDivElement>(null);
  useClickMe(divRef, callBack);
  return (
    <div ref={divRef}>
      target
      <div>targetChildren</div>
    </div>
  );
};
const NextElement: React.FC = () => {
  return <div>NextElement</div>;
};

const RootElement: React.FC<PropsCallback> = ({ callBack }: PropsCallback) => {
  return (
    <div>
      RootElement
      <UseClickElement callBack={callBack} />
      <NextElement />
    </div>
  );
};

describe('useClickMe 테스트', () => {
  //given
  const isCalled = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    const isCallWrapper = (): void => {
      isCalled();
    };
    render(<RootElement callBack={isCallWrapper} />);
  });

  //when
  test('자신 이외의 컴포넌트가 클릭되면 반응하지 않아야 한다.', () => {
    const next = screen.getByText('NextElement');
    userEvent.click(next);
    const root = screen.getByText('RootElement');
    userEvent.click(root);
    expect(isCalled).toHaveBeenCalledTimes(0);
  });

  //when
  test('자기 자신이 클릭되면 반응해야한다.', () => {
    const target = screen.getByText('target');
    userEvent.click(target);
    expect(isCalled).toHaveBeenCalledTimes(1);
  });

  test('자기 자신의 자식 컴포넌트가 클릭되어져 이벤트 버블이 일어나도 반응하지 않아야 한다.', () => {
    const targetChildren = screen.getByText('targetChildren');
    userEvent.click(targetChildren);
    expect(isCalled).toHaveBeenCalledTimes(0);
  });
});
