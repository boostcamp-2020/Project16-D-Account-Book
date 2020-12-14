import { observer } from 'mobx-react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import useGetAuthority from '../hook/use-get-authority/useGetAuthority';
import AccountbookSelectionPage from '../pages/accountbook-selection-page/AccountbookSelectionPage';
import SettingsAccountbookPage from '../pages/settings-accountbook-page/SettingsAccountbookPage';
import SettingsAccountsPage from '../pages/settings-accounts-page/SettingsAccountsPage';
import SettingsCategoriesPage from '../pages/settings-categories-page/SettingsCategoriesPage';
import SettingsCsvPage from '../pages/settings-csv-page/SettingsCsvPage';
import SettingsSocialPage from '../pages/settings-social-page/SettingsSocialPage';
import StatisticsPage from '../pages/statistics-page/StatisticsPage';
import TransactionPage from '../pages/transaction-page/TransactionPage';
import LoginGuard from '../hoc/LoginGuard';
import UserAuthorityGuard from '../hoc/UserAuthorityGuard';
import InfiniteScrollTestPage from '../pages/infinite-scroll-test-page/InfiniteScrollTestPage';

const NeedUserLogin: React.FC = () => {
  useGetAuthority();

  return (
    <Switch>
      <Route exact path="/" component={LoginGuard(AccountbookSelectionPage)} />
      <Route exact path="/accountbooks/:id" component={UserAuthorityGuard(TransactionPage)} />
      <Route
        exact
        path="/accountbooks/:id/settings/accountbook"
        component={UserAuthorityGuard(SettingsAccountbookPage)}
      />
      <Route
        exact
        path="/accountbooks/:id/settings/categories"
        component={UserAuthorityGuard(SettingsCategoriesPage)}
      />
      <Route exact path="/accountbooks/:id/settings/accounts" component={UserAuthorityGuard(SettingsAccountsPage)} />
      <Route exact path="/accountbooks/:id/settings/csv" component={UserAuthorityGuard(SettingsCsvPage)} />
      <Route exact path="/accountbooks/:id/settings/social" component={UserAuthorityGuard(SettingsSocialPage)} />
      <Route exac path="/accountbooks/:id/test" component={UserAuthorityGuard(InfiniteScrollTestPage)} />
      <Route exact path="/accountbooks/:id/statistics" component={UserAuthorityGuard(StatisticsPage)} />
    </Switch>
  );
};

export default observer(NeedUserLogin);
