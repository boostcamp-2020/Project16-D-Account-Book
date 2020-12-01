import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransactionPage from './pages/transaction-page/TransactionPage';
import { RootProvider } from './store/RootStore';
import LoginPage from './pages/login-page/LoginPage';
import GlobalFonts from './assets/fonts/GlobalFonts';

function App(): JSX.Element {
  return (
    <GlobalFonts>
      <RootProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/accountbooks/:id/transactions" component={TransactionPage} />
          </Switch>
        </Router>
      </RootProvider>
    </GlobalFonts>
  );
}

export default App;
