import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TransactionPage from '../../../pages/transaction-page/TransactionPage';
import DefaultMobxMock from '../../../__dummy-data__/mock/defaultMock';
import { RootProvider } from '../../../store/RootStore';
import React from 'react';
import userEvent from '@testing-library/user-event';
describe('거래내역 생성 모달 테스트', () => {
  beforeEach(() => {
    render(
      <RootProvider>
        <MemoryRouter initialEntries={['/accountbooks/1']}>
          <Route path="/accountbooks/:id" component={TransactionPage} />
        </MemoryRouter>
      </RootProvider>,
    );
  });
  test('첫 페이지 로드시에는. 모달이 없어야 정상이다.', async () => {
    await waitFor(() =>
      screen.getByRole('button', {
        name: /button-create-modal/,
      }),
    );
    const result = screen.queryByText('내역작성');
    expect(result).toBeNull();
  });
  test('create Button을 눌렀을 경우 성공적으로 모달이 등장하는가?', async () => {
    await waitFor(() =>
      screen.getByRole('button', {
        name: /button-create-modal/,
      }),
    );
    userEvent.click(
      screen.getByRole('button', {
        name: /button-create-modal/,
      }),
    );
    screen.getByText('내역작성');
  });
});
