import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransactionPage from './pages/transaction-page/TransactionPage';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/accountbooks/:id/transactions" component={TransactionPage} />
      </Switch>
    </Router>
  );
}

export default App;
