import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransactionPage from './pages/transaction-page/TransactionPage';
import { RootProvider } from './store/RootStore';

function App(): JSX.Element {
  return (
    <Router>
      <RootProvider>
        <Switch>
          <Route exact path="/accountbooks/:id/transactions" component={TransactionPage} />
        </Switch>
      </RootProvider>
    </Router>
  );
}

export default App;
