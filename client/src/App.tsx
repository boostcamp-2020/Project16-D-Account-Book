import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TransactionPage from './pages/transaction-page/TransactionPage';
import { TransactionProvider } from './store/TransactionStore';
import { DateProvider } from './store/DateStore';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <DateProvider>
          <Route exact path="/accountbooks/:id/transactions" component={TransactionPage} />
        </DateProvider>
      </Switch>
      <Switch>
        <Route exact path="/accountbook/:id/transactions" component={TransactionPage} />
      </Switch>
    </Router>
  );
}

export default App;
