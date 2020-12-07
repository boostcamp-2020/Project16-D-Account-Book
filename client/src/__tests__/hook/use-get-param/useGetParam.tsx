import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import useGetParam from '../../../hook/use-get-param/useGetParam';
describe('useParam 테스트', () => {
  test('id param을 잘 캐치하는가?', () => {
    const ContentComponent: React.FC = () => {
      const id = useGetParam();
      return <div>{id}</div>;
    };
    const SampleComponent: React.FC = () => {
      return (
        <MemoryRouter initialEntries={['/test/5']}>
          <Route exact path="/test/:id">
            <ContentComponent />
          </Route>
        </MemoryRouter>
      );
    };
    render(<SampleComponent />);
    screen.queryByText(5);
  });
});
