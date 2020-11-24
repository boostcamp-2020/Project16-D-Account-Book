import React, { useRef } from 'react';
import useClickOutside from '../../../hook/use-click-outside/useClickOutside';
import { render, queryByText, getByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

interface PropsCallback {
  callBack: () => void;
}

const UseClickElement: React.FC<PropsCallback> = ({ callBack }: PropsCallback) => {
  const divRef = useRef<HTMLDivElement>(null);
  useClickOutside(divRef, callBack);
  return <div ref={divRef}>target</div>;
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

describe('useClickOutside 테스트', () => {
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
  test('자신 이외의 컴포넌트가 클릭되면 callback이 호출되어야한다.', () => {
    const next = screen.getByText('NextElement');
    userEvent.click(next);
    const root = screen.getByText('RootElement');
    userEvent.click(root);
    expect(isCalled).toHaveBeenCalledTimes(2);
  });

  //when
  test('안쪽이 눌리면 어떠한 동작도 이루어지지 말아야 한다.', () => {
    const target = screen.getByText('target');
    userEvent.click(target);
    expect(isCalled).toHaveBeenCalledTimes(0);
  });
});
