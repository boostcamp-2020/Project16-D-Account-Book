import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransactionPage from './pages/transaction-page/TransactionPage';
import { RootProvider } from './store/RootStore';
import LoginPage from './pages/login-page/LoginPage';
import GlobalFonts from './assets/fonts/GlobalFonts';

function App(): JSX.Element {
  return (
    <>
      <RootProvider>
        <Router>
          <GlobalFonts />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/accountbooks/:id" component={TransactionPage} />
          </Switch>
        </Router>
      </RootProvider>
    </>
  );
}

export default App;
