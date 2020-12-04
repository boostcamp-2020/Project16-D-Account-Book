import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransactionPage from './pages/transaction-page/TransactionPage';
import { RootProvider } from './store/RootStore';
import LoginPage from './pages/login-page/LoginPage';
import GlobalFonts from './assets/fonts/GlobalFonts';
import SettingsAccountbookPage from './pages/settings-accountbook-page/SettingsAccountbookPage';
import SettingsCategoriesPage from './pages/settings-categories-page/SettingsCategoriesPage';
import SettingsAccountsPage from './pages/settings-accounts-page/SettingsAccountsPage';
import SettingsCsvPage from './pages/settings-csv-page/SettingsCsvPage';

function App(): JSX.Element {
  return (
    <>
      <RootProvider>
        <Router>
          <GlobalFonts />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/accountbooks/:id" component={TransactionPage} />
            <Route exact path="/accountbooks/:id/settings/accountbook" component={SettingsAccountbookPage} />
            <Route exact path="/accountbooks/:id/settings/categories" component={SettingsCategoriesPage} />
            <Route exact path="/accountbooks/:id/settings/accounts" component={SettingsAccountsPage} />
            <Route exact path="/accountbooks/:id/settings/csv" component={SettingsCsvPage} />
          </Switch>
        </Router>
      </RootProvider>
    </>
  );
}

export default App;
